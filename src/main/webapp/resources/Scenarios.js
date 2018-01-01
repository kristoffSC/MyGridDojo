	require(["myGrid/MyGrid"], function(MyGrid){
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
		  
		  var t =  new dojox.timing.Timer(5000);
		  
		  t.onTick = function(){
	  			console.info("One second elapsed");
	  			
	  			require(["dojo/request"], function(request){
	  				request("data").then(
	  						function(data){
	  							//console.log("The file's content is: " + data);
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
	  			});
	  		},
	  		
	        t.onStart = function(){
	            console.info("Starting timer");
	           },
	           
	        t.start();
		  
		});