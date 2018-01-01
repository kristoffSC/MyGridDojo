<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html >
<head>

	<link rel="stylesheet" href="../dojo19/dijit/themes/claro/claro.css">
	<style type="text/css">
	@import "../dojo19/dojox/grid/resources/claroGrid.css";

/*Grid needs an explicit height by default*/
#gridDiv {
    height: 40em;
}

#gridDiv2 {
    height: 40em;
}
	</style>
	
	<script>dojoConfig = {async: true, parseOnLoad: false}</script>
	
	<script src='../dojo19/dojo/dojo.js'></script>
	
	<script type="text/javascript">
	
	require({
	    packages: [
	        { name: "myGrid", location: "//localhost:8080/C3p0JmxDeadlock/resources" },
	    ]
	}, [ "myGrid/MyGrid" ]);
	
	</script>
	
	 <script type="text/javascript" src="resources/Scenarios.js"> </script>
</head>
<body class="claro">
    <div id="gridDiv"></div>
</body>

<body class="claro">
    <div id="gridDiv2"></div>
</body>
</html>
