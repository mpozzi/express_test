Ext.define('AppMor.model.Photos', {
	 extend: 'Ext.data.Model'
	
	,fields: [
		 { name: 'id', type: 'int' }
		,{ name: 'src', type: 'string' }
	]
	,idProperty: 'id'
	,proxy: {
        type: 'rest',
        url : '/photos.json',
        reader: {
            type: 'json',
            root: 'PHOTOS'
        }
    }
});
