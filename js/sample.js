let loc = window.location.pathname;



const nav__list = document.getElementById("nav__list");
const list_1 = document.getElementById("line-though_1");
const list_2 = document.getElementById("line-though_2");

const toggleButton = document.getElementById("color-switch").addEventListener("click", function(){
   document.body.classList.toggle("dark-mode");
});

document.getElementById("menu_icon").addEventListener("click", function(){
   list_1.classList.toggle("toggle_line_1");
   list_2.classList.toggle("toggle_line_2");
   
   nav__list.classList.toggle("nav__active");
   document.body.classList.toggle("to_bottom");
});



document.querySelectorAll("a").forEach((item) => {
   item.addEventListener("click", function(){

      nav__list.classList.toggle("nav__active");
      document.body.classList.toggle("to_bottom");

   list_1.classList.toggle("toggle_line_1");
   list_2.classList.toggle("toggle_line_2");
   });
});