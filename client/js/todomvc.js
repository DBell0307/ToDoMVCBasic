(function() {
	$(document).ready(function() {
	  
		var taskList = [];
		var numTasks = 0;
		
		function addTask(e) 
		{
    		e.preventDefault();
    		var input = document.getElementById("newTask").value;
			taskList.push(input);
			numTasks = (numTasks + 1);
			var element = document.createElement("li");
  			var newContent = document.createTextNode(input); 
  			element.appendChild(newContent);
  			document.getElementById("list").appendChild(element);
		};
		$( "#submitBtn" ).on( "click", addTask);


		// display empty box

		// listen for user submission (click a button or hit enter)
			// create a html element to add that to the list of todo items

		// add delete listeners
		  // remove item from display

	});
})();
