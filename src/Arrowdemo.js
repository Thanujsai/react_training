function square(num){
    return num*num
}

var squaree = num => num*num;//arrow function

export default class Abc{
    getData(){
        console.log("this value",this)//this operator points to the object which is calling the method

        setTimeout(() => {
            console.log("this value",this)//arrow functions preserves the scope of this operator
        },0)
    }
}

var obj1 = new Abc()

obj1.getData();