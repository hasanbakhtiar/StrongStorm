const addToDoButton = document.querySelector("#addToDo");
const inputField = document.querySelector("#inputField");
const toDoContainer = document.querySelector("#toDoContainer");
const addElement = ()=>{

    let paragrph = document.createElement('p');
    paragrph.innerText = inputField.value;
    toDoContainer.appendChild(paragrph);
    inputField.value = "";

    paragrph.addEventListener('click', ()=>{
        paragrph.style.textDecoration = "line-through";
    });

    paragrph.addEventListener('dblclick', ()=>{
        toDoContainer.removeChild(paragrph);
    })

}
addToDoButton.addEventListener('click', addElement);


