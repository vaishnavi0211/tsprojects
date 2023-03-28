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

    CircleArea():number
    {
        return this.PI*this.rad*this.rad
    }
}

var radius=parseInt(prompt("Enter the radius of the circle:"))
var obj1=new Circle(radius)
console.log("Area of circle is : "+obj1.CircleArea())