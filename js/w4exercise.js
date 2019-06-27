"use strict"
var element = document.getElementById('div');
//We have div element in 'element' variable

//Returns the number of classes
console.log(element.classList.length); //Output: 4

//Returns the value of the class attribute
console.log(element.classList.value); //Output: one two three four
function addClass() {
	var text = document.getElementById('text');
	text.classList.remove('hidden');
	text.classList.add('show');
}
//https://www.includehelp.com/code-snippets/dynamically-add-css-class-with-javascript.aspx

// var mi = document.createElement("input");
// mi.type= "text"
// mi.value = "default"

// var mi = document.createElement("input");
// mi.setAttribute('type', 'text');
// mi.setAttribute('value', 'default');

// var i = document.createElement("input"); //input element, text
// i.setAttribute('type',"text");
// i.setAttribute('name',"username");
// i.setAttribute('value',"default");