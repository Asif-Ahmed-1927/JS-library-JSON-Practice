//sessionStorage.setItem("user", "asif");
//sessionStorage.setItem("password", "12345678");

//const userName= sessionStorage.getItem("user");
//console.log(userName);

//sessionStorage.removeItem("user");
const user= {id:"101", name:"asif"}
sessionStorage.setItem("user" ,JSON.stringify(user));

const userInfo= JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo)
