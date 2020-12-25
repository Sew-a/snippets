let loc = window.location.pathname;

console.log(loc);

const toggleButton = document.getElementById("color-switch").addEventListener("click", function(){
   let mode = document.getElementById("mode");
   document.body.classList.toggle("dark-mode");
   console.log("clicked");
});