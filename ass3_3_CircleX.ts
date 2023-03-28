import * as promptsync from "prompt-sync"
const prompt=promptsync()

class Circle
{
    rad:number
    PI:number

    constructor(r:number)
    {
        this.rad=r
        this.PI=3.14
    }

    CircleArea():void
    {
        let Ans:number=0
        Ans=this.PI*this.rad*this.rad
        console.log("Area of circle is : "+Ans)
    }
}

class CircleX extends Circle
{
    constructor(data:number)
    {
        super(data)
    }

    CircleCircumference():number
    {
        this.CircleArea()
        return 2*this.PI*this.rad
    }
}

var radius=parseInt(prompt("Enter the radius of the circle:"))
var obj1=new CircleX(radius)

console.log("Circumference of circle is : "+obj1.CircleCircumference())