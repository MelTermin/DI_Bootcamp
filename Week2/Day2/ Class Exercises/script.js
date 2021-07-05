//Class Exercise//

let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};

userCart["prices"]["pear"]=0.234
console.log(userCart)

let user= prompt("What kind of fruit do you prefer; Banana, Apple or Pear?").toLowerCase();

console.log(user);

let userPrice= userCart["prices"][user];


console.log(userPrice)


//Exercise 1//

let details = {
  username:"Melissa",
  password: 1234,
  database: ["username", "Melissa", "password" ,1234],
  newsfeed: [{username: "Selin", timeline:"newtimeline"}],
}

//Exercise 2 in class//



if(userCart["isUserSignedIn"]){
  console.log(userCart["username"],userCart["password"])
} else {
  alert ("You need to sign in");
}

if (userCart["username"]==="John" && userCart["password"]=== 1234) {
  console.log("You are signed in")
} else if (userCart["username"]==="John" || userCart["password"]=== 1234) {console.log("One of the credentials wrong")}
 else {
alert ("You need to sign in")
}


