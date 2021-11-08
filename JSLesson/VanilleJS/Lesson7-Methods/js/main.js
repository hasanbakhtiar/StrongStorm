const textSelector = document.getElementsByTagName('p')[0];


const myTime=()=>{
    textSelector.innerHTML =  new Date().toLocaleTimeString();
}

textSelector.innerHTML = setInterval(myTime ,1000);//(function, millisecond)