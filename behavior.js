
// 1. ESTABLISH REFERENCE POINTS
// create references to DOM elements we need to manipulate
var enterButton = document.getElementById("enter");	//getting enter button
var input = document.getElementById("userInput");	//getting user text 
var ul = document.querySelector("ul");	//getting the unordered list
var item = document.getElementsByTagName("li");	//getting the list item






// 2. CREATE LISTENERS FOR SOME OF THOSE REFERENCE POINTS
// listen for user activity with the ENTER button and keyboard keystrokes (ENTER key)
// then, invoke necessary functions to respond accordingly
//------------------------------------------------------//
enterButton.addEventListener("click",addListAfterClick);	//listen for click on "enterButton"

input.addEventListener("keypress", addListAfterKeypress);	//listen for keypress inside "userInput" field
//------------------------------------------------------//







// 3. RESPOND TO USER INTERACTING WITH REFERENCE POINTS
// after using mouse to click on 'Add' button OR by using keyboard to press ENTER
// validate user input before proceeding 
//------------------------------------------------------//
function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}
//------------------------------------------------------//






// 4. CREATE LIST ITEM FOR NEW TASK
//------------------------------------------------------//
function createListElement() {
	var li = document.createElement("li"); // creates new instance of list item
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field


	// COMPLETED TASK
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");	//using the DOM to toggle the "done" style class
	}

	li.addEventListener("click",crossOut);
	// END COMPLETED TASK




	// ADD THE DELETE BUTTON TO THE LIST ITEM
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));	//makes text using our X input
	li.appendChild(dBtn);
	
	// RESPOND TO DELETE CLICK
	dBtn.addEventListener("click", deleteListItem);
	


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}
//------------------------------------------------------//





// GETTER/HELPER METHODS
//------------------------------------------------------//
// size of the to-do that the user inputs into text box
function inputLength(){	
	return input.value.length;
} 

// how many to-do items on the TO-DO list
function listLength(){
	return item.length;
}
//------------------------------------------------------//


