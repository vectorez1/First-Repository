let title = document.getElementById("main-title");
let button = document.getElementById("button");
button.addEventListener("click", ()=>{title.innerText = "You Pressed"})
let container = document.getElementsByClassName('container');
for(i=0; i < container[0].children.length; i++){
    container[0].children[i].style.margin = '10px'
}
