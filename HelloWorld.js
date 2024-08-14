



class greet{
    constructor(){
        var firstWorld
        var SecondWorld
    }
    greeting(firstWorld,SecondWorld){
        this.firstWorld=firstWorld;
        this.SecondWorld=SecondWorld;
    }
    display(){
        console.log(`${this.firstWorld} ${this.SecondWorld}`)
    }
}

function greet1(){
    console.log("Hello World by second method");
}
greet1();
console.log("Hello World by first method");

let welcome=new greet()
welcome.greeting("good","morning");
welcome.display();

