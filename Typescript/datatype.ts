function Test(){
    var marks = 33;
    let result = "pass";
    if(marks<35){
        let result = "fail";
        console.log("Inside Result: "+result);
    }

    //let result = "srikanth";
    console.log("Outside Result: "+result);
}

Test();