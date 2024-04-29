import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import Apppp from './App';
import reportWebVitals from './reportWebVitals';
import { getReport as Ashureport} from './Ashu';
import { getReport as Thanujreport} from './Thanuj';//since the method names are same we are providing an alias

import { iphone , car} from "./demo"//destructuring
import { Abc } from './Arrowdemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Apppp />
    <Ashureport/>
    <Thanujreport/>
    {/* <Abc /> */}
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//var trainer
console.log("trainer ",trainer)

var trainer = "ashu"

for(let i=0;i<10;i++){
  console.log(i)
}
//console.log(i)//if i is var i is accessable here, if we declare i with let it is not accessable, this is from ES6

var x= 20
var x = 30 // redeclaring is possible

let y = 10
//let y=20 //non declarable


var phone = "tata indicom";
console.log("Phone is", phone)

function Phone(){
  //var phone
  console.log("phone inside is", phone)//undefined since phone variable is inside the method but not accessible right now, therefore it will not go to the global scope variable as well and it cant access the var inside of the function

  var phone = "Iphone"//all variables are taken to the top of their working environment
}

Phone()

//in js there can be only one function with a name, only unique names are allowed, function overloading or overriding is not possible
// function training(){
//   console.log("...")
// }

// function training(tech){
//   console.log("...",tech)
// }

function training(tech1,tech2,...technologies){
  console.log("...",tech1,tech2,technologies)
}

training()
training("tech1")
training("tech1","tech2")

var user = {
  id:"Thanuj",
  phone:9492765791,
  salary:2
}

user.name = "Sai"

console.log("user",user)

// var user2 = user;//changing the ref
var user2 = {...user}//spread operator, spreading the values of one thing into an array
// user2.name = user.name
// user2.id = user.id
// user2.phone = user.phone
console.log("user2 : ",user2)
console.log("user : ",user)

var friends1 = ["Joy","Ross","Chandler"]
var friends2 = ["Pheobe","Monica","Raechel"]

var friends = [...friends1,...friends2]

console.log("Friends ",friends)

//deep copy and shallow copy


//var phone = user.phone//copying valueof phone property into phone variable
//var {phone} = user shortcut to extract phone from user, called as destructuring

var {phone,salary} = user;//destructuring
console.log(phone,salary)
console.log("phone is : ",phone)
console.log("emergency phone is : ",phone)
console.log("tmep phone is : ",phone)
console.log("ofc phone is : ",phone)

console.log(iphone,car)