Ext.define('AppMor.Application', {
    name: 'AppMor',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
        'Login'
    ],

    controllers: [
        // TODO: add controllers here
        'Login'
        ,'Main'
    ],

    stores: [
        // TODO: add stores here
        'Photos'
        ,'Articles'
    ]
});
