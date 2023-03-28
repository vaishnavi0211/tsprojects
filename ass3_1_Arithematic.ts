import * as promptsync from "prompt-sync"
const prompt=promptsync()

class Arithematic
{
    num1:number
    num2:number

    constructor(n1:number,n2:number)
    {
        this.num1=n1
        this.num2=n2
    }

    Addition():number
    {
        return this.num1+this.num2
    }

    Substraction():number
    {
        return this.num1-this.num2
    }

    Multiplication():number
    {
        return this.num1*this.num2
    }

    Division():number
    {
        return this.num1/this.num2
    }
}

var number1=parseInt(prompt("Enter fisrt number"))
var number2=parseInt(prompt("Enter second number"))
var obj1=new Arithematic(number1,number2)


while(true)
{
    console.log("\n1.Addition \n 2.Substraction \n 3.Multiplication \n 4. Division ")
    var ch=parseInt(prompt("Enter a choice:"))
    if (ch==1)
    {
        console.log("Addition [ "+number1," + "+number2," ] : "+obj1.Addition())
    }
    else if (ch==2)
    {
        console.log("Substraction [ "+number1," - "+number2," ] : "+obj1.Substraction())
    }
    else if(ch==3)
    {
        console.log("Multiplication [ "+number1," * "+number2,"]  : "+obj1.Multiplication())
    }
    else if(ch==4)
    {
        console.log("Divison [ "+number1," / "+number2," ] : "+obj1.Division())
    }
    var ch1=(prompt("Do you want to continue?(Y/N)"))
    if (ch1=='n')
    {
        break
    }
}

/*
console.log("Addition [ "+number1," + "+number2," ] : "+obj1.Addition())
console.log("Substraction [ "+number1," - "+number2," ] : "+obj1.Substraction())
console.log("Multiplication [ "+number1," * "+number2,"]  : "+obj1.Multiplication())
console.log("Divison [ "+number1," / "+number2," ] : "+obj1.Division())*/