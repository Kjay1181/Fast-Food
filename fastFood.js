var hamburger={
meat:"beef",
veg:"tomato",
cheese:"american",
mayo:true,
mustard:true,
ketchup:true,
bbq:false,
salt:true,
pepper:false,
price:7,
qty:1

}

// ask user how many
// tell the user how many they are buying
// tell user how much is the total

var questions= prompt("how many burgers do you want?");
window.alert(questions+" "+"burgers");
var userInput=(questions*7);
window.alert("your total is"+ " "+userInput+" "+"dollars");
