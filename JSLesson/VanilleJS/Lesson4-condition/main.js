// Şərt Qurluşu 
// if -> əgər
// else if  -> deyilsə əgər  
// else -> deyilsə

const myTime = 23;

/*
seher - 5
gun orta - 13
axsam  -  21
gece - 23 
*/
// if(myTime >=5 && myTime < 13 ){
//     console.log("Sabahin Xeyr");


//     if(myTime == 7){
//             console.log("yuxudan qalx");
//     } else if(myTime == 9){
//         console.log("Yemek vaxtidir");
//     }else if (myTime == 10){
//         console.log("Yola dusmek vaxtidir");

//     }else{
//         console.log("Artiq ise gecikirsen");
//     }
    
// }

// else if(myTime >=13 && myTime < 21){
//     console.log("Her vaxtin Xeyr");
//     if(myTime == 14){
//         console.log("nahar et");
// }
// }

// else if(myTime >=21 && myTime < 23){
//     console.log("Axsamin Xeyr");
//     if(myTime == 22){
//         console.log("eve get");
//     }

// }

// else if( myTime >= 23){
//     console.log("Yatmaq vaxtidir");

// }

// if(myTime == 5){
//     console.log("Hello");
// }else if (myTime == 10){
//     console.log("Hello10");
// }
// else if (myTime == "Salam"){
//     console.log("Salam");
// }  else{
//     console.log("Bye");
// }

// const a = 5;

// switch(a){
//     case 5:
//         console.log("bu 5dir");
//     break;

//     case 10 :
//         console.log("bu 10dur");
//     break;   
// }

try{
    // errorlari istisnai halini işarə edir yəni erroru gizledir.
    throw "";
    console.log("Hello1");
    console.log("Hello2");
    console.lofadg("Hello3");



}catch(err){
    console.log("Bir xeta ile uzlesdim");
    console.log(err);
}finally{
    console.log("Men her halda isleyirem");
}


