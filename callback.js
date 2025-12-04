function greet1(var1, greet2){
    console.log(var1);
    greet2("good afternoon");
}

function greet2(var2, greet3){
    console.log(var2);
    greet3("good evening");
}

function greet3(var3){
    console.log(var3);
}

greet1("good morning", (var2)=>{
    greet2(var2,(var3)=>{
        greet3(var3)
    })
})