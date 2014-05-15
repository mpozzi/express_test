// Set to TRUE to start viewing console logs!
var isDebugging = false;

Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath({
	'Ext.ux': 'app/ux'
});

Ext.application({
	 name: 'AppMor'
	,requires: [
		'Ext.window.Window'
	]
	,controllers: ['Login']
	//,stores: ['CurrentUsers']
	//,model: ['CurrentUser']
	,autoCreateViewport: false
	,launch: function() {
		_ExtMVC = this;
		
		Ext.create('AppMor.view.Login');
	}
});