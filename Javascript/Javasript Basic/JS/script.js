alert("Hello Aishu!");

function sayHi(){
	console.log("Hi!");
}

sayHi();

var sayBye=function(){
	console.log("Bye!");
}

sayBye();

function sing(song){
	console.log(song);
}

sing("Meow Meow");
sing("bow bow");

function mul(a,b){
	return a*b;
}

mul(10,10);

var list=["Dog","Cat","Panda"];

list[1];

var user={
	name:"Aishu",
	age:21,
	hobby:"dance",
	isMarried:false,
	spells:["Boo","abrakadabra"],
	shout:function(){
		console.log("Ahhhhh!");
	}
};

var users=[
{
	username: "andy",
	password: "secre"
},
{
	username: "jess",
	password: "123"
}
];

var todo=[
	"Dance",
	"Draw",
	"Read",
];

var n=todo.length;

for(var i=0;i<n;i++){
	console.log(todo[i]+"!");
}

todo.forEach(function(i){
	console.log(i);
})

var counter1=0;
while(counter1<10){
	console.log(counter1);
	counter1++;
}

var counter2=10;
do{
	console.log(counter2);
	counter2--;
}while(counter2>0);

