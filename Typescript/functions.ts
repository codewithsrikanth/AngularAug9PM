enum Result{Pass=1,Fail=-1,Promoted=0}

//Class Definition
function Student(){
    let sId:number = 101;
    let sName:string = "Srikanth Rallabandi";
    let sIsActive:boolean = true;

    let arMarks: Array<number> = [45,69,74];
    let total:number = 0;

    for(let x of arMarks){
        total = total+x;
    }

    let Avg = total/3;

    let sResult: Result = Result.Pass;

    this.sResult = function(){
        if(Avg>=35){
            return Result.Pass;
        }
        else{
            return Result.Fail;
        }
    }
}

//Calling the class function
var std = new Student();
console.log(std.sResult());
console.log(Result[std.sResult()]);

