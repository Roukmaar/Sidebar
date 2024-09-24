// get sidebar and clikable-button elements

const button = document.querySelector('.clikable-button')
const sidebar = document.querySelector('.menu-content')

let sidebar = document.querySelector('.sidebar-pc');
let navList = document.querySelector('.clikable-button')

let toggle=false;
function spreadmenufunction(){
    const sidebar = document.querySelector('.menu-content');
if(toggle=true){
    sidebar.style.display='none'
    toggle=false
}
else{
    sidebar.style.display='initial'
    toggle=true
}
}

closeBtn.addEventListener("click", () => {
sidebar.classList.toggle("open");
})

button.addEventListener('click',spreadmenufunction)
