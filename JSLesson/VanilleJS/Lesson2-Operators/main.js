// All Data Type 
// --------------------------------------------------------------------------------------------------
// Primitive (Bəsit)  Data(Data) Type(Tipi) Start
let infomationText1   = "Salam1";     //String(mətn)      data type ("Hi")
let infomationText2   = 'Salam2';     //String(mətn)      data type ("Hi")
let infomationNumb    = 5 ;           //Number(rəqəm)     data type (5)
let infomationBoolean = true ;        //Boolean(məntiqi)  data type (true/flase)

document.write(infomationText1     + "<br>");
document.write(infomationText2     + "<br>");
document.write(infomationNumb      + "10" + "<br>");
document.write(infomationBoolean   + "<br>");
// Basic(Bəsit)        Data(Data) Type(Tipi) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Composite(Birləşik) Data(Data) Type(Tipi) Start
let infomationArray  =  ['pc',5,true,'table'];    //Array
let infomationObject =  {
    name:"Samsung",
    ROM: "OneUI"
};                                                //Object

document.write(infomationArray          + "<br>");
document.write(infomationObject.name    + "<br>");
document.write(infomationObject.ROM     + "<br>");
// Composite(Birləşik) Data(Data) Type(Tipi) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Special(Xüsusi)     Data(Data) Type(Tipi) Start
let informationUndefined = "";   //Undefined
let informationNULL      = null; //Null

document.write(informationUndefined          + "<br>");
document.write(informationNULL               + "<br>");
// Special(Xüsusi)     Data(Data) Type(Tipi) End
// --------------------------------------------------------------------------------------------------


// All Operators
// --------------------------------------------------------------------------------------------------
// Assignment Operators (Daxil Etmə operatorları) Start
// =
// +=
// -=
// *=
// /=
// %=
// **=

var infoDatA = 5;
var infoDatB = 10;
infoDatA += infoDatB;
document.write(infoDatA);
// Assignment Operators (Daxil Etmə operatorları) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Arithmetic Operators (Riyazi operatorlar) Start
// +    Toplama
// -    Çıxma
// *    Vurma
// /    Bölmə
// %    Qalıq
// **   Üstü
// ++   Bir artırma
// --   Bir əksiltmə
var infoNumbSt = 5; 
var infoNumbNd = 10; 
var infoNumbRd = 5;
    infoNumbRd++;
// infoNumbRd--;

document.write(infoNumbSt + infoNumbNd + "<br>");
document.write(infoNumbSt - infoNumbNd + "<br>");
document.write(infoNumbSt * infoNumbNd + "<br>");
document.write(infoNumbSt / infoNumbNd + "<br>");
document.write(infoNumbSt %  infoNumbNd + "<br>");
document.write(infoNumbSt ** infoNumbNd + "<br>");
document.write(infoNumbRd + "<br>");


// Arithmetic Operators (Riyazi operatorlar) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Comparison Operators(Qarşılaşdırma operatorları) Start
// ==   (qoşa bərabər)
// ===  (üçlü bərabər)
// !=   (nida tək bərabər)
// !==  (nida qoşa bərabər)
// <    (kiçikdir)
// <=   (kiçik bərabərdir)
// >    (böyükdür)
// >=   (böyük bərabərdir)

var infoCompaSt     =  7;
var infoCompaNd     =  7;

if(infoCompaSt >= infoCompaNd){
    document.write(true);
}else{
    document.write(false);
}
document.write("<br>");

// Comparison Operators(Qarşılaşdırma operatorları) End
// --------------------------------------------------------------------------------------------------





























//Primitive Data Types -> Bəsit Data Tipləri
// String
// const infoData = " FrontEnd";
// console.log("Hello" + infoData);
// Number
// const infoNumber1 = "5";
// const infoNumber2 = 15;
// console.log(infoNumber1+infoNumber2);
// Boolean
        // true
        // false
        // if (false) {
        //     let a = "This is True"
        //     console.log(a);
        // }else if(false){
        //     let b = "This is True 2";
        //     console.log(b);
        // }else{
        //     let c = "This is false"
        //     console.log(c);
        // }


// Composite Data Types
// Array
        // const infoArray  = new Array();
        // const infoArray = [5,"Hello", true,10];
        // console.log(infoArray);
// Object


// const infoObj  = new Object();
// const infoObj = {
//     name:"Hello",
//     myNumber: 5
// };
// console.log(infoObj.myNumber);

// Special Data Types
// Undefined
// const a = undefined;
// console.log(a);
// Null
// const b = null;
// console.log(b);





// let a = 10;
// let b = 10;
// let c = true;

// if (a == c) {
//     console.log("beraberdir");
// }else{
//     console.log("Sehvdir");
// }

// console.log(a);