const infoArraySt = []; //native (recommended)
const infoArrayNd = new Array(); //method base

// const a = {
//     myData:[
//        { name:'hello',
//         age:5}
//     ]
// }

// console.log(a.myData[0].name);


// const infoArray = [5,true,"Hello"];
// console.log(infoArray[0]);

// const infoArray = ['table', 'pen', 'book'], 
// infoArray1 = ['a','b','c'];

// const infoArray = ['table', [true],'pen', 'book',["snow",'rain',[5,10],"sunny"],'board'];


// console.log(infoArray[4][2][0]);


// infoArray[2] = "Board";
// infoArray['myIndex'] = "5";

// =================================================================================
// Object 


// const infoObj = {
//     name:" Jhon",
//     myList: ['table','desk']
// }

// const infoObj = {
//     name:"Janna",
//         surname:"Dark",
//         event:(name)=>{
//             this.name = name;
//             return this.name+" live";
//     }
// }

// console.log(infoObj.name);
// console.log(infoObj.myList[0]);
// console.log(infoObj.event("Janna"));




// ======================================================================
// ECMAScript 
// ES5
// function


// function menimFunksiyam (){
//     const sayHi = "Hello";
//     console.log(sayHi);

// }

// const menimFunksiyam = function (){
//     const sayHi = "Hello";
//     console.log(sayHi);

// }

// menimFunksiyam();



// (function menimFunksiyam (a,b){
//     // const sayHi = "Hello";
//     // console.log(sayHi);
//     console.log(a+b); ;

// })(5,10);


// function myFunc(a=10,b=20){
//     // let a = 5;
//     // let b = 10;
//     return a+b;
// }

// console.log(myFunc(10,40));

// ES6
// class 
// arrow function


// const myFunc = (a,b)=>{// arrow function
//     console.log(a+b);
// }
// myFunc(10,10);

// class myData{
//     sayHi(){
//         return "Hello";
//     }
// }


// const myClass = new myData();
// console.log(myClass.sayHi());



const myPullTextPlace = document.querySelector('h1');


const myEvent = {

    eventSt:()=>{
        myPullTextPlace.innerHTML = "text1";
    },
    eventNd:()=>{
        myPullTextPlace.innerHTML = "text2";
    },
    eventTh:()=>{
        myPullTextPlace.innerHTML = "text3";
    }
}

document.querySelectorAll('button')[0].addEventListener('click', myEvent.eventSt);
document.querySelectorAll('button')[1].addEventListener('click', myEvent.eventNd);
document.querySelectorAll('button')[2].addEventListener('click', myEvent.eventTh);




