function F1(){
    let AR:string[] = ["HTML","CSS","Javascript","Typescript","Bootstrap"];

    // for(var i=0;i<AR.length;i++){
    //     console.log(AR[i]);
    // }

    //for..in   :Index
    //for..of   :Value
    for(var x of AR){
        console.log(x);
    }
}

F1();