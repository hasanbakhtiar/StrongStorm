
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3
const removeItem=()=>{
    document.querySelector('#test').style.display = 'none';
}

document.querySelector('.remove-btn').addEventListener('click',removeItem);




const timeTextSelector = document.querySelector('.time-text');
const timebuttonSelector = document.querySelector('.time-button');
const stopbuttonSelector = document.querySelector('.stop-button');

const myTime =()=> {
    timeTextSelector.innerHTML = new Date().toLocaleTimeString();

}
const timeLess = setInterval(myTime, 1000);

const timeStop =()=> {
clearInterval(timeLess)
}

stopbuttonSelector.addEventListener('click', timeStop )



// const timeLess = setTimeout(myTime, 1000);
// const mt=() =>{ timebuttonSelector.addEventListener('click',myTime)};
// setInterval(mt(),1000);



