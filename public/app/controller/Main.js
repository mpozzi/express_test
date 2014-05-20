Ext.define('AppMor.controller.Main', {
    extend: 'Ext.app.Controller'
    ,requires:[
    	'Ext.view.View'
    ]
    
    ,refs: [{
		 ref: 'main'
		,selector: 'app-main'
	},{
		 ref: 'center'
		,selector: 'app-main panel[region="center"]'
	}]
	
	,init: function() {
		this.control({
			'#articlesBtn':{
				click: this.clickArticles
			}
			,'#photosBtn':{
				click: this.clickArticles
			}
			,'#loginBtn':{
				click: this.clickArticles
			}
			,'app-main panel[region="center"]':{
				afterrender: this.after
			}
			,'app-main panel':{
			//	afterrender: this.afterMain
			}
		});
	}
	,afterMain: function (){
		
		var btn = Ext.ComponentQuery.query('#loginBtn')[0];
		console.log(btn);
		//if (Ext.isDefined(btn)){
		//	btn.fireEvent('click', btn);
	//	}
 	}
	,after: function (a,b,c){
		metodo();
	}
	
	,clickArticles: function (button, e, eOpts) {
		var me = this;
		var item = button.itemId;
		switch (button.itemId){
			case 'articlesBtn':
		 	if ( Ext.isDefined(me.getCenter()) ) { me.getCenter().destroy(); }
				me.getMain().add({ 
					region: 'center',
					autoScroll: true,
					items:[{
						xtype: 'dataview',
						itemId: 'dataview',
						store: 'Articles',
						width: '90%',
					//	height: 300,
						tpl: '<tpl for="." ><div style="margin: 10px; padding: 10px; border: 1px solid black" ><h3>{title}</h3></br><h4>{author}</h4><br>{body} </div></tpl>',
						itemSelector: 'div', 
						emptyText: 'No images available'
						
					}]
				}).show();
			break;
			case 'photosBtn':
				if ( Ext.isDefined(me.getCenter()) ) { me.getCenter().destroy();}
				me.getMain().add({ 
					region: 'center',
					autoScroll: true,
					items:[{
						xtype: 'dataview',
						itemId: 'dataview',
						store: 'Photos',
						width: '30%',
						height: 300,
						tpl: '<div style="margin-top:25%;margin-left: 50%; margin-right:50%;width: 1024px;display: inline-block;"><tpl for="." ><div id="photos" style="margin: 5px; padding: 10px; display: -webkit-inline-box; border: 1px solid black" ><img src="{src}" width="300px"/></div></tpl></div>',
						itemSelector: 'div#photos', 
						emptyText: 'No images available'
					}]
				}).show();
			break;
			case 'loginBtn':
				if ( Ext.isDefined(me.getCenter()) ) { me.getCenter().destroy();}
				me.getMain().add({
					region: 'center',
					items:[{
						xtype: 'login'
					}]
				}).show();
			break;
		}
		
	}
	
});
function metodo(){
	Ext.Ajax.request({
		method: 'POST'
	    ,url: '/auth.json',
	   // token: sessionStorage.getItem('token')
	    callback: function(a,b,c){
	    	console.log(a,b,c); 
	    	if (c.requestId == 1){
		        var text = c.responseText;
		        text = Ext.JSON.decode(text);
		        console.log('text.success',text.success);
		        var invalid;
		        if (text.success == false){
		        	//invalid = true;
		        	var btn = Ext.ComponentQuery.query('#loginBtn')[0];
		        	btn.fireEvent('click', btn);
		        	clear();
		        }else{
		        	console.log('text.success',text.success);
		        	art();
 		        }
	    	}
	    }
	});
	art();
}
function art(){
	Ext.Ajax.request({
		 method: 'GET'
		,url: '/articles.json'
		,headers: {'token': sessionStorage.getItem('token')} //sessionStorage.getItem('token')
		//}]
		,callback: function(a,b,c){
			console.log(a,b,c);
			if (c.requestId == 1){
				var text = c.responseText;
				text = Ext.JSON.decode(text);
				if (Ext.isDefined(text.error)){
					var btn = Ext.ComponentQuery.query('#loginBtn')[0];
					btn.fireEvent('click', btn);
    				clear();				
				}
			}	
		}
	});
}
