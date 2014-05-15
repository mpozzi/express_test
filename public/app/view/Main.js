Ext.define('AppMor.view.Main', {
	extend: 'Ext.container.Container'
	,requires:[
		'Ext.tab.Panel'
		,'Ext.layout.container.Border'
	]
	
	,xtype: 'app-main'

	,layout: {
		type: 'border'
	}
	
	

	,items: [{
		 region: 'north'
		,height: 70
		,tbar: [{
			html:'<B>Mario Pozzi</B>'
		},'->',{		
			 xtype: 'buttongroup'
		//	,toggleGroup: 'buttongroup'
			,items: [{
				
				 text: 'ARTICLES'
				,itemId: 'articlesBtn'
				,scale: 'large'
				,shadow: true
				,enableToggle: true
				,style:"background-color: darkorange;"
			},{
				 text: 'PHOTOS'
				,itemId: 'photosBtn'
				,scale: 'large'
				,shadow: true
				,enableToggle: true
				,style:"background-color: rgb(129, 223, 35);"
			},{
				 text: 'LOGIN'
				,itemId: 'loginBtn'
				,scale: 'large'
				,shadow: true
				,enableToggle: true
				,style:"background-color: rgb(73, 187, 209);"
				
			}]
		}]
	},{
		region: 'center'
		,xtype: 'panel'
		,width: 150
		
	}]
});