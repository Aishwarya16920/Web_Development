var button= document.getElementsByTagName("button")[0];

button.addEventListener("click",function () {
	console.log("CLICKED");
})

var enter=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li=document.createElement("li");
	var del=document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	del.appendChild(document.createTextNode("Delete"))
	ul.appendChild(del);
	input.value="";
	li.addEventListener("click",strikeTask);
    li.addEventListener("mouseenter",hover);
}

function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}	
}

function addListAfterKeypress(){
	if(inputLength() > 0 && event.keyCode===13){
		createListElement();
	}
}

function strikeTask(){
	this.classList.toggle('done');
}

function hover(){
	this.classList.add('point');
}

enter.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

var li=document.getElementsByTagName("li");
for(let i=0;i<li.length;i++){
	var element=li[i];
	element.addEventListener("mouseenter",hover)
    element.addEventListener("click",strikeTask);
}
