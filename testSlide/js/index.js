 var buttonDown = document.getElementById("buttonDown");
 var down = document.getElementById("down");
 buttonDown.addEventListener("click", function() {
   down.scrollIntoView({block: "center", behavior: "smooth"});
});

var buttonFSlide = document.getElementById("firSlide");
var first_slide = document.getElementById("first_slide");
buttonFSlide.addEventListener("click", function() {
  first_slide.scrollIntoView({block: "center", behavior: "smooth"});
});

 var buttonSSlide = document.getElementById("secSlide");
 var second_slide = document.getElementById("second_slide");
 buttonSSlide.addEventListener("click", function() {
   second_slide.scrollIntoView({block: "center", behavior: "smooth"});
 });

 var buttonTSlide = document.getElementById("thrSlide");
 var third_slide = document.getElementById("third_slide");
 buttonTSlide.addEventListener("click", function() {
   third_slide.scrollIntoView({block: "center", behavior: "smooth"});
 });
