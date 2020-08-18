var Result;
(function (Result) {
    Result[Result["Pass"] = 1] = "Pass";
    Result[Result["Fail"] = -1] = "Fail";
    Result[Result["Promoted"] = 0] = "Promoted";
})(Result || (Result = {}));
//Class Definition
function Student() {
    var sId = 101;
    var sName = "Srikanth Rallabandi";
    var sIsActive = true;
    var arMarks = [45, 69, 74];
    var total = 0;
    for (var _i = 0, arMarks_1 = arMarks; _i < arMarks_1.length; _i++) {
        var x = arMarks_1[_i];
        total = total + x;
    }
    var Avg = total / 3;
    var sResult = Result.Pass;
    this.sResult = function () {
        if (Avg >= 35) {
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    };
}
//Calling the class function
var std = new Student();
console.log(std.sResult());
console.log(Result[std.sResult()]);
