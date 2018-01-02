require(["myGrid/MyGrid"], function(MyGrid){
		  
	var counter = 0;
	
	var myGrid = new MyGrid();
	myGrid.show();
		  
	var grid = myGrid.grid;
  
	grid.onRowContextMenu = function(event)
	{
		  console.log("SUUUP");
		  console.log(grid);
	  		
		  require(["dojo/request"], function(request){
			request("getData").then(
					function(data){
						var data = dojo.fromJson(data);
						if (data)
						{
							console.log(data);
							myGrid.refresh(data)
						}
					},
					function(error){
						console.log("An error occurred: " + error);
					}
			);
		});
	  		
	  }
	  
	  var t =  new dojox.timing.Timer(1500);
	  
	  t.onTick = function(){
			console.info("Interval elapsed");
			
			myGrid.addOneDelOne(counter++);
			
/*			require(["dojo/request"], function(request){
				request("data").then(
						function(data){
							var data = dojo.fromJson(data);
							if (data)
							{
								myGrid.refresh(data)
							}
						},
						function(error){
							console.log("An error occurred: " + error);
						}
				);
			});*/
		},
		
	    t.onStart = function(){
	        console.info("Starting timer");
	       },
	       
	    t.start();
  
});