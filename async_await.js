function greet(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("good afternoon")
        },2000);
    })
}

const calling = async() =>{
    console.log("good morning");
    const res = await greet("good morning");
    console.log(res);
    console.log("good evening");
}

calling();