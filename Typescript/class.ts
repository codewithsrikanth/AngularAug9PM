class Student{
    sId:number;
    sName:string;
    sMarks:number;

    // constructor(Id:number,Name:string,Marks:number){
    //     this.sId = Id;
    //     this.sName = Name;
    //     this.sMarks = Marks;
    // }

    Display(){
        console.log("Student ID: "+this.sId+", Sname is: "+this.sName+" and Marks are: "+this.sMarks);
    }
}

var Obj:Student = new Student();
Obj.sId = 101;
Obj.sName = "Srikanth";
Obj.sMarks = 69;
Obj.Display();