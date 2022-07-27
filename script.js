let addToDoButton = document.getElementById('addTODO');
let todoconatainer= document.getElementById('toDocontainer');
let inputfield = document.getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText= inputfield.value;
    todoconatainer.appendChild(paragraph);
    inputfield.value ="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";

    })
    paragraph.addEventListener('dblclick',function(){
        todoconatainer.removeChild(paragraph);

    })
})