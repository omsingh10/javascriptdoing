
const love = Symbol("key6") //This is the way to declare a key
console.log(love)



const human = { //This is the way to declare an object

    name : "Shiv" ,
    [love] : "Shivisbest",
    age : "21"  ,
    Email : "hello@shiv.com",
    IsLoggendIn : true ,
}






console.log(human.age); //This is the way to access the value of a key
console.log(human["Email"]);
console.log(human)

console.log(human[love])