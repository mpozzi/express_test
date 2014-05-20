/**
 * Controller for Act Now view 
 */
Ext.define('AppMor.controller.Login', {
	 extend: 'Ext.app.Controller'
	,views: ['Login']
	
	,refs: [{
		 ref: 'userName'
		,selector: '#login [name=username]'
	},{
		 ref: 'userPassword'
		,selector: '#login [name=password]'
	}]
	
	,init: function() {
		this.control({
			'#login #loginUser': {
				click: this.loginUser
			}
			,'#login *[name="username"]': {
				specialkey: function(field, e){
					if (e.getKey() == e.ENTER) {
						this.loginUser();
					}
				}
			}
			,'#login *[name="password"]': {
				specialkey: function(field, e){
					if (e.getKey() == e.ENTER) {
						this.loginUser();
					}
				}
			}
		});
	}
	
	// Login the user.
	,loginUser: function(comp) {
		var me = this;
		Ext.Ajax.request({
			 url: '/auth.json'
			,method: 'POST'
			,params: {
				 username: me.getUserName().value
				,password: me.getUserPassword().value
				,'Submit': 'Login'
			}
			,success: function(result, request) {
				var json = Ext.decode(result.responseText);
				if ( json.success ) {
					sessionStorage['token'];
					sessionStorage.setItem('token', json.token);
					verif();
					Ext.Msg.show({
						 title: 'Logueo Correcto'
						,msg: 'El Logueo fue exitoso'
						,closable: false
						,draggable: false
						,buttons: Ext.Msg.OK
					});
				} else {
					sessionStorage.setItem('token','');
				//	verif();
					clear();					
					// Something whent wrong in the connection.
					Ext.Msg.show({
						 title: 'Error'
						,msg: json.message
						,closable: false
						,draggable: false
						,buttons: Ext.Msg.OK
					});
				}
			}
			,failure: function(result, request) {
				Ext.Msg.show({
					 title: 'Error inesperado'
					,msg: 'Un error ha ocurrir cuando se trata de conectar con el servidor. Por favor, vuelve a intentarlo.'
					,closable: false
					,draggable: false
					,buttons: Ext.Msg.OK
				});
			}
		});
	}
});
function verif(){
	var token = sessionStorage.getItem('token');
	Ext.getStore('Articles').load({
		params:{token: token}
	});
	Ext.getStore('Photos').load({
		params:{token: token}
	});
}
function clear(){
	Ext.getStore('Articles').removeAll();
	Ext.getStore('Photos').removeAll();
}
