

// class infoData{
//   constructor(){

//   }
  
//   sayHi(){
//     return 'Hello';
//   }

// }

// function infoData(){
//    this.surname = "Imanov"
// }

// infoData.prototype.name = "Ilqar";



// const myData = new infoData();

// console.log(infoData);

// console.log(myData.name);
// console.log(myData.surname);



class infoData{
    constructor(name,surname,age){
        this.addName = name;
        this.addSurname = surname;
        this.addAge = age;
    }
  
    claculateAge(){
      return this.addName +" is "+ (new Date().getFullYear() - this.addAge);
    }
  
    sayHi(){
      let a = "Hello";
      return a;
    }
  
  
  }
  
  
  class infoCar extends infoData {
    carName(carBrand){
      return `my car name ${carBrand}`
    }
  }
  
  const myData = new infoData("Hasim", "Alakbarov", 1996);
  const myCar = new infoCar();
  
  
  console.log(myData.claculateAge());
  console.log(myCar.carName("Mercedes"));
  
  console.log(myCar.sayHi());
  
  
  