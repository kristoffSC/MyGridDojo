
define(['dojo/_base/declare', 'dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dojo/dom', 'dojo/domReady!', 'dojox/timing', 'dojo/store/Memory', 'dojo/store/DataStore', 
	'dojo/data/ObjectStore', 'dojo/_base/lang'], 
	function(declare, lang, DataGrid, ItemFileWriteStore, dom, timing, Memory, DataStore, ObjectStore, lang){
  return declare(null, {

/*    set up data store
    var data = {
      identifier: "id",
      items: []
    };*/
    
    objectStore: undefined,
    store: undefined,
  
  	//t:  new dojox.timing.Timer(5000),
    
    /*set up layout*/
    layout: [[
      {'name': 'Column 1', 'field': 'id', 'width': '100px'},
      {'name': 'Column 2', 'field': 'col2', 'width': '100px'},
      {'name': 'Column 3', 'field': 'col3', 'width': '200px'},
      {'name': 'Column 4', 'field': 'col4', 'width': '150px'}
    ]],

    /*create a new grid*/
    grid: undefined,

  	show: function()
  	{ 
  		this.objectStore = new dojo.store.Memory({}),
  	    this.store = new dojo.data.ObjectStore({objectStore: this.objectStore}),
  		
  		grid = new DataGrid({
  	        //id: 'grid',
  	        store: this.store,
  	        rowSelector:'20px',
  	        structure: this.layout,
  	        rowSelector: '25px'});

  	  grid.on(".dgrid-content:contextmenu", function(evt) { 
		  var row = grid.row(evt); 
		  activeItem = row && row.data; 
		  console.log(row);
		  console.log("ddd");
		}); 
  		
  		this.grid = grid;
  		
        this.grid.placeAt("gridDiv");

        /*Call startup() to render the grid*/
        this.grid.startup();
  	},    
        //console.log(store);
    
  	refresh: function(data)
  	{
    	var oldIds = dojo.clone(this.objectStore.index);
    	for (var i = 0; i < data.length; i++)
    	{
    		var item = data[i];
    		delete oldIds[item.id];
    		
    		var fetchedItem = this.store.fetchItemByIdentity({identity: item.id, onItem: function(){}});

    		if (!fetchedItem)
    		{
    			this.store.newItem(item);
    		} 
    	}
    	 
    	for (var id in oldIds)
    	{
    		console.log("removing");
    		console.log(id);
    		var fetchedItem = this.store.fetchItemByIdentity({identity: id, onItem: function(){}});
    		this.store.deleteItem(fetchedItem);
    	}
    	
    	this.store.save();
  	},
  });

});