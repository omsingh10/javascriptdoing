
const love = Symbol("key6")



const human = {

    name : "Shiv" ,
    [love] : "Shivisbest",
    age : "21"  ,
    Email : "hello@shiv.com",
    IsLoggendIn : true ,
}



console.log(human.age);
console.log(human["Email"]);
console.log(human)

console.log(human[love])