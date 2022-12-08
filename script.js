const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
//const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".submit");
//const prevBtnFourth = document.querySelector(".prev-3");
//const submitBtn = document.querySelector(".submit");
//const progressText = document.querySelectorAll(".step p");
//const progressCheck = document.querySelectorAll(".step .check");
//const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  
});



prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  
});
var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          );
        });

nextBtnThird.addEventListener("click", function(event){
     event.preventDefault();
         slidePage.style.marginLeft = "-25%";
          
         //alert("Your Form Successfully Signed up");
        });
        
