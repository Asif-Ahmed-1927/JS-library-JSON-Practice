//setItem
//localStorage.setItem("userName" ,"Asif");
//localStorage.setItem("password" ,"12345678");

//getItem

const userName= localStorage.getItem("userName");
const userPassword= localStorage.getItem("password");
console.log(userName, userPassword);

//update//
localStorage.setItem("userName" ,"Anika");
localStorage.setItem("password" ,"12345678");

//remove item//
localStorage.removeItem("userName");
localStorage.removeItem("password");

//string//
const countries=['Bangaladesh', 'India', 'nepal']
localStorage.setItem("countries" ,JSON.stringify(countries));


//getitem//

const countriesList= JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);