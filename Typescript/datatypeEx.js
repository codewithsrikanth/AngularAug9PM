//Number
var Eno;
Eno = 101;

//String
var Ename;
Ename = "Srikanth Rallabandi";
//Boolean
var isActive;
isActive = true;
//Array
var AR = [100, 200, 300];
var BR = ["C#.Net", "Javascript", "Typescript", "Angular"];
//Tuple
var DOB = [22, "Jul", 1990];
//Enum
var Ranking;
(function (Ranking) {
    Ranking[Ranking["extrem"] = 5] = "extrem";
    Ranking[Ranking["avg"] = 3] = "avg";
    Ranking[Ranking["aboveavg"] = 4] = "aboveavg";
    Ranking[Ranking["disater"] = 2] = "disater";
})(Ranking || (Ranking = {}));
;
Ranking.disater;
