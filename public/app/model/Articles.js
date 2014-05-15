Ext.define('AppMor.model.Articles', {
	 extend: 'Ext.data.Model'
	
	,fields: [
		 { name: 'id', type: 'int' }
		,{ name: 'title', type: 'string' }
		,{ name: 'author', type: 'string' }
		,{ name: 'body', type: 'string' }
	]
	,idProperty: 'id'
	,proxy: {
        type: 'rest',
        url : '/articles.json',
        reader: {
            type: 'json',
            root: 'ARTICLES'
        }
    }
});
