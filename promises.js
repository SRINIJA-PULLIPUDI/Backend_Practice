function greet1(var1, greet2){
    return new Promise((resolve,reject)=>{
        console.log(var1);
        resolve("good afternoon");
    })
}

function greet2(var2, greet3){
    return new Promise((resolve,reject)=>{
        console.log(var2);
        resolve("good evening");
    })
}

function greet3(var3){
    return new Promise((resolve,reject)=>{
        console.log(var3);
        resolve(var3);
    })
}

greet1("good morning").then((result)=>{
    console.log(result, "successfully executed");
    return greet2(result)
}).then((result)=>{
    console.log(result,"successfully executed")
    return greet3(result)
}).then((result)=> console.log(resulut,"successfully executed"))
  .catch((error)=> console.log("API failed"))
