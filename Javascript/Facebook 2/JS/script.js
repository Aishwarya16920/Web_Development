var database=[
	{
		username:"Aishu",
		password:"supersecret",
	},
	{
		username:"Akshay",
		password:"secret",
	},
	{
		username:"Mithun",
		password:"123",
	}
];

var newsFeed=[
	{
		username:"Bobby",
		timeline:"So tired from all that learning!",
	},
	{
		username:"Sally",
		timeline:"Javascript is so cool!",
	},
];

var userNamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("What's your password?");

function isUserValid(username,password){
	for(var i=0;i<database.length;i++){
		if(database[i].username===userNamePrompt && database[i].password===passwordPrompt){
			return true;
		}
	}
	return false;
}


function signIn(user,pass){
	if(isUserValid(user,pass)){
		console.log(newsFeed);
	}
	else{
		alert("Sorry, wrong username or password!");
	}
}

signIn(userNamePrompt,passwordPrompt);