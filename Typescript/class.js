var Student = /** @class */ (function () {
    function Student() {
    }
    // constructor(Id:number,Name:string,Marks:number){
    //     this.sId = Id;
    //     this.sName = Name;
    //     this.sMarks = Marks;
    // }
    Student.prototype.Display = function () {
        console.log("Student ID: " + this.sId + ", Sname is: " + this.sName + " and Marks are: " + this.sMarks);
    };
    return Student;
}());
var Obj = new Student();
Obj.sId = 101;
Obj.sName = "Srikanth";
Obj.sMarks = 69;
Obj.Display();
