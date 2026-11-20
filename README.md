# ☕ Titik Seduh — Enterprise Information System (EIS) Berbasis Odoo

> **"Satu Titik, Sejuta Rasa"**

**Titik Seduh** adalah proyek kustomisasi dan *rebranding* Odoo ERP menjadi *Enterprise Information System* (EIS) yang dirancang khusus untuk operasional UMKM *Coffee Shop*. Sistem ini mengintegrasikan seluruh alur bisnis kafe — mulai dari penjualan, pembelian bahan baku, manajemen persediaan/gudang, produksi menu (BOM), Kasir (*Point of Sale*), manajemen SDM, rekrutmen pegawai, hingga situs web kafe terpadu dalam satu platform.

Proyek ini disusun untuk memenuhi tugas praktikum mata kuliah **Sistem Informasi Enterprise** (Jobsheet 1–5) di **Politeknik Negeri Semarang**.

---

## 📑 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Penggantian Nama Modul](#-penggantian-nama-modul-menu-items)
- [Kustomisasi Tampilan & Branding](#-kustomisasi-tampilan--branding)
- [Modul yang Diaktifkan & Dikonfigurasi](#-modul-yang-diaktifkan-dan-dikonfigurasi)
- [Penomoran Dokumen](#-penomoran-dokumen)
- [Struktur Repositori](#-struktur-repositori)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Tangkapan Layar](#-tangkapan-layar)
- [Anggota Tim](#-anggota-tim)
- [Lisensi & Catatan Akademik](#-lisensi--catatan-akademik)

---

## ✨ Fitur Utama

- **Alur Bisnis Kafe End-to-End:** Mengelola *Sales Order* hingga *Invoice* (Paid), *RFQ* hingga *Purchase Order*, serta penetapan *Bill of Materials* (BOM) untuk resep produk menu.
- **Antarmuka Bahasa Indonesia:** Nama menu dan modul disesuaikan dengan istilah operasional harian kafe.
- **Branding Terintegrasi:** Penyesuaian nama aplikasi, logo, favicon, tema warna *dark brown*, desain halaman *login*, dan cetakan dokumen bisnis.
- **Point of Sale (POS):** Manajemen denah meja (*Floor Plans*) terbagi atas area *Main Floor* dan *Patio*.
- **Manajemen SDM & Rekrutmen:** Pembatasan akses berbasis peran (*Officer* & *Administrator*), integrasi lamaran kerja web langsung ke *pipeline recruitment*.
- **Website Kafe:** Halaman beranda dan formulir lamaran kerja terintegrasi langsung dengan database ERP.

---

## 🔄 Penggantian Nama Modul (Menu Items)

Untuk mempermudah penggunaan oleh staf kafe, beberapa modul bawaan Odoo diubah namanya sebagai berikut:

| Nama Bawaan Odoo | Nama di Titik Seduh | Catatan Kustomisasi |
| :--- | :--- | :--- |
| **Inventory** | **Manajemen Gudang** | Stok bahan baku & katalog produk kafe |
| **Employees** | **SDM** | Akses dibatasi khusus *Officer* & *Administrator* |
| **Sales** | **Penjualan Kafe** | Pengelolaan pesanan & transaksi pelanggan |
| **Invoicing** | **Tagihan & Kasir** | Pencatatan invoice dan status pembayaran |
| **Purchase** | **Pembelian Bahan** | Pengadaan bahan baku dari vendor |

---

## 🎨 Kustomisasi Tampilan & Branding

### 1. Pengaturan Umum & Branding
- **Nama Aplikasi:** Diubah menjadi **Titik Seduh**.
- **Identitas Perusahaan:** Logo, favicon, dan profil perusahaan dikonfigurasi melalui menu *Users & Companies*.

### 2. Antarmuka & Tema
- **Halaman Login:** Didesain ulang sesuai dengan nuansa *branding* kafe.
- **Navigation Bar:** Warna bawaan Odoo (ungu) diganti menjadi warna **Cokelat Tua** khas *Titik Seduh*.

### 3. Website Builder & POS
- **Landing Page:** Halaman depan situs dilengkapi dengan tagline *"Satu Titik, Sejuta Rasa"*.
- **POS Floor Plan:** Tata letak meja dibagi menjadi 2 area utama: **Main Floor** dan **Patio**.

### 4. Layout Dokumen Bisnis
- Menggunakan tema layout **Bubble** dengan tipografi **Fira Mono**.
- Header/Footer memuat logo, tagline, dan alamat lengkap kafe pada dokumen:
  - *Quotation*
  - *Sales Order* (SO)
  - *Purchase Order* (PO)
  - *Invoice*

---

## 🧩 Modul yang Diaktifkan dan Dikonfigurasi

Proyek ini dikembangkan secara bertahap melalui Jobsheet 1 hingga 5:

| # | Modul | Cakupan Konfigurasi |
| :-: | :--- | :--- |
| **1** | **Sales & Invoicing/Accounting** | Siklus *Sales Order* hingga pembentukan *Invoice* berstatus *Paid*. |
| **2** | **Purchase** | Pengelolaan daftar vendor dan penerbitan *Request for Quotation* (RFQ). |
| **3** | **Inventory** | Katalog produk, bahan baku, dan manajemen stok gudang. |
| **4** | **Manufacturing** | Penentuan *Bill of Materials* (BOM) resep menu (contoh: *Cafe Latte*). |
| **5** | **Point of Sale (POS)** | Transaksi kasir langsung (tanpa diskon dan dengan diskon). |
| **6** | **Employees / HCM** | Pengaturan 5 departemen, *job positions*, dan data 7 pegawai. |
| **7** | **Recruitment** | Pembukaan lowongan kerja, formulir web, *pipeline* hingga *Hired* & *Create Employee*. |
| **8** | **Website** | Halaman beranda kafe dan integrasi profil perusahaan. |

---

## 🔢 Penomoran Dokumen

Format penomoran otomatis (*sequence*) dokumen bisnis yang diterapkan:

| Jenis Dokumen | Format Penomoran |
| :--- | :--- |
| **Sales Order** | `TS/SO/%(year)s/` |
| **Purchase Order** | `TS/PO/%(year)s/` |
| **Invoice** | `TS/INV/2026/` |

---

## 📁 Struktur Repositori

```text
.
├── README.md           # Dokumentasi utama proyek
├── laporan.pdf         # Laporan praktikum / proyek lengkap
├── db/                 # Database Odoo (dump / backup sql)
└── odoo/               # Berkas konfigurasi dan modul kustom Odoo
```

| Berkas / Direktori | Deskripsi Isi |
| :--- | :--- |
| `laporan.pdf` | Laporan resmi proyek Titik Seduh (Jobsheet 1–5). |
| `db/` | Berkas *database dump* PostgreSQL hasil konfigurasi akhir. |
| `odoo/` | Berkas sumber Odoo beserta kustomisasi visual dan konfigurasi modul. |

---

## 🚀 Instalasi & Penggunaan

### Prasyarat
- **Odoo:** Versi 16.0 / 17.0 *(Sesuaikan dengan versi yang Anda gunakan)*
- **Database:** PostgreSQL 13+
- **Environment:** Python 3.10+

### Langkah Singkat (Restore Database)

1. **Klon repositori ini:**
   ```bash
   git clone https://github.com/Xtrada-one/titik-seduh-odoo.git
   cd titik-seduh-odoo
   ```

2. **Restore Database:**
   Import / restore berkas database yang berada di dalam folder `db/` ke dalam instance PostgreSQL Anda.

3. **Jalankan Odoo:**
   Jalankan server Odoo dengan mengarahkan konfigurasi ke folder `odoo/`.

4. **Akses Sistem:**
   Buka peramban (*browser*) dan akses `http://localhost:8069`, lalu pilih database **Titik Seduh**.

---

## 🖼️ Tangkapan Layar

| Halaman Login | Dashboard Utam | POS Floor Plan |
| :---: | :---: | :---: |
| *(Tambahkan Gambar)* | *(Tambahkan Gambar)* | *(Tambahkan Gambar)* |

> *Catatan: Unggah berkas gambar ke direktori `screenshots/` dan perbarui tautan di atas.*

---

## 👥 Anggota Tim

Proyek ini disusun oleh Tim Mahasiswa Politeknik Negeri Semarang:

| Nama | NIM | Peran |
| :--- | :--- | :--- |
| **Yudhistira Alkautsar Susilo** | `3.34.24.3.21` | Ketua Tim |
| **Cindy Amelia** | `3.34.24.3.04` | Anggota |
| **Muhammad Syafiq Ulinnuha A.** | `3.34.24.3.15` | Anggota |

---

## 📄 Lisensi & Catatan Akademik

Proyek ini dikembangkan sebagai Tugas Besar Praktikum Mata Kuliah **Sistem Informasi Enterprise**, Program Studi Terapan / Jurusan Teknik Elektro, **Politeknik Negeri Semarang**.