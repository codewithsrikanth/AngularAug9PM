function Test() {
    var marks = 33;
    var result = "pass";
    if (marks < 35) {
        var result_1 = "fail";
        console.log("Inside Result: " + result_1);
    }
    //let result = "srikanth";
    console.log("Outside Result: " + result);
}
Test();
