let loc = window.location.pathname;
const nav__list = document.getElementById("nav__list");

const toggleButton = document.getElementById("color-switch").addEventListener("click", function(){
   let mode = document.getElementById("mode");
   document.body.classList.toggle("dark-mode");
});

document.getElementById("menu_icon").addEventListener("click", function(){
   const list_1 = document.getElementById("line-though_1");
   const list_2 = document.getElementById("line-though_2");

   list_1.classList.toggle("toggle_line_1");
   list_2.classList.toggle("toggle_line_2");
   
   nav__list.classList.toggle("nav__active");
   document.body.classList.toggle("to_bottom");
});

document.querySelectorAll("a").forEach((item) => {
   item.addEventListener("click", function(){
      nav__list.classList.toggle("nav__active");
      document.body.classList.toggle("to_bottom");
   });
});