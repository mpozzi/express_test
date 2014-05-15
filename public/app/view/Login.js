Ext.define('AppMor.view.Login', {
	 extend: 'Ext.panel.Panel'
//	,items: [{
		,xtype: 'login'
		,itemId: 'login'
		,width: 210
		,title: 'Bienvenido'
		,titleAlign: 'center'
		,style: 'position:relative;top:40%;left:50%;margin-left:-105px;'
		,bodyStyle: 'background-color: #157fcc;'
		,items: [{
			 xtype: 'form'
			,buttonAlign: 'center'
			,padding: 10
			,frame: true
			,defaults: {
				 xtype: 'textfield'
				,labelAlign: 'left'
				,labelWidth: 70
			}
			,items: [{
				 fieldLabel: 'Usuario'
				,name: 'username'
				,itemId: 'username' 
			},{
				 fieldLabel: 'Contraseña'
				,name: 'password'
				,itemId: 'password'
				,inputType: 'password'
			}]
			,buttons: [{
				 xtype: 'button'
				,itemId: 'loginUser'
				,text: 'Ingresar'
			}]
		}]
//	}]
});
