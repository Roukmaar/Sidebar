// Get the sidebar, close button, and search button elements
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let navList = document.querySelector(".nav-list");

// Event listener for the menu button to toggle the sidebar open/close
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open"); 
  navList.classList.toggle("scroll");
  menuBtnChange();
});

// Event listener for the search button to open the sidebar
searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  navList.classList.toggle("scroll");
  menuBtnChange();
});

// Function to change the menu button icon
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); ng
  }
}