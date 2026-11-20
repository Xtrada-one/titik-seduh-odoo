/** @odoo-module **/

import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { Component, onWillStart, useState } from "@odoo/owl";

export class EnterpriseDashboard extends Component {
    setup() {
        this.orm = useService("orm");
        this.action = useService("action");

        this.state = useState({
            isLoaded: false,
            total_pelanggan: 0,
            total_produk: 0,
            total_penjualan: 0,
            total_pembelian: 0,
            stok_barang: 0,
        });

        onWillStart(async () => {
            await this.loadData();
        });
    }

    async loadData() {
        this.state.isLoaded = false;

        // 1. Total Pelanggan
        try {
            this.state.total_pelanggan = await this.orm.searchCount("res.partner", [['active', '=', true]]);
        } catch (e) {
            console.error("Error pelanggan:", e);
        }

        // 2. Total Produk
        try {
            this.state.total_produk = await this.orm.searchCount("product.template", [['active', '=', true]]);
        } catch (e) {
            console.error("Error produk:", e);
        }

        // 3. Total Penjualan (Gabungan dari Sale Order & POS Order)
        try {
            let totalPenjualan = 0;

            // A. Coba dari Sale Order (Tabel sale_order)
            try {
                const salesData = await this.orm.call("sale.order", "read_group", [[['state', '!=', 'cancel']], ['amount_total'], []]);
                if (salesData && salesData.length > 0 && salesData[0].amount_total) {
                    totalPenjualan += salesData[0].amount_total;
                }
            } catch (e) { console.warn("Sale Order kosong", e); }

            // B. Coba dari POS Order (Tabel pos_order)
            try {
                const posData = await this.orm.call("pos.order", "read_group", [[['state', '!=', 'cancel']], ['amount_total'], []]);
                if (posData && posData.length > 0 && posData[0].amount_total) {
                    totalPenjualan += posData[0].amount_total;
                }
            } catch (e) { console.warn("POS Order kosong", e); }

            this.state.total_penjualan = totalPenjualan;
        } catch (e) {
            console.error("Error penjualan:", e);
        }

        // 4. Total Pembelian (Tabel purchase_order)
        try {
            const purchasesData = await this.orm.call("purchase.order", "read_group", [[['state', '!=', 'cancel']], ['amount_total'], []]);
            if (purchasesData && purchasesData.length > 0 && purchasesData[0].amount_total) {
                this.state.total_pembelian = purchasesData[0].amount_total;
            }
        } catch (e) {
            console.error("Error pembelian:", e);
        }

        // 5. Stok Barang (Tabel stock_quant)
        try {
            const stockData = await this.orm.call("stock.quant", "read_group", [[], ['quantity'], []]);
            if (stockData && stockData.length > 0 && stockData[0].quantity) {
                this.state.stok_barang = stockData[0].quantity;
            }
        } catch (e) {
            console.error("Error stok:", e);
        }

        this.state.isLoaded = true;
    }

    formatCurrency(value) {
        if (!value) return "0";
        return Number(value).toLocaleString('id-ID');
    }

    openAction(res_model, name, domain = []) {
        this.action.doAction({
            type: 'ir.actions.act_window',
            name: name,
            res_model: res_model,
            views: [[false, 'list'], [false, 'form']],
            domain: domain,
            target: 'current',
        });
    }
}

EnterpriseDashboard.template = "titik_seduh_dashboard.EnterpriseDashboard";

registry.category("actions").add("titik_seduh_dashboard.EnterpriseDashboard", EnterpriseDashboard);
