# -*- coding: utf-8 -*-
{
    'name': 'Titik Seduh Login',
    'version': '1.0',
    'summary': 'Custom login screen layout for Titik Seduh',
    'category': 'Theme',
    'author': 'Antigravity',
    'depends': ['web', 'website', 'sale_management', 'purchase', 'stock'],
    'data': [
        'views/login_templates.xml',
        'views/homepage_templates.xml',
        'views/dashboard_action.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'titik_seduh_login/static/src/scss/login.scss',
            'titik_seduh_login/static/src/js/homepage.js',
        ],
        'web.assets_backend': [
            'titik_seduh_login/static/src/js/dashboard.js',
            'titik_seduh_login/static/src/scss/dashboard.scss',
            'titik_seduh_login/static/src/xml/dashboard.xml',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
