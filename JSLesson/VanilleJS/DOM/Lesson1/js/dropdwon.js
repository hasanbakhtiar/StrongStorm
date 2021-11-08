const dropDwonSelector = document.querySelector("#dropdown");


const dropdwonOpen=()=>{
    const dropDwonSelector = document.querySelector("#dropdown");

    dropDwonSelector.style.display = "block";

}

const dropdwonClose=()=>{
    const dropDwonSelector = document.querySelector("#dropdown");

    dropDwonSelector.style.display = 'none';

}

const text = document.querySelector('a');
text.addEventListener('click', dropdwonClose)
text.addEventListener('dblclick', dropdwonOpen)

