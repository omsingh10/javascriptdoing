//singleton object

const human = new Object({
    namek : "Shiv" ,
    agek : "28"  ,
    Emailk : "pp"
});

const shiv = {
    name : "Shiv" ,
    age : "22"  ,
    Email : "kkk"
}

const lov = {
    namew : "Shiv" , // this should not ve same in objts
    agew : "22"  ,
    Emailw : "kkk"
}



// console.log(human)
// console.log(shiv)
//  const kk = Object.assign({}, shiv ,human , lov)
//  console.log(kk)

const pp = {...lov , ...shiv, ...human}
console.log(pp)
 // 