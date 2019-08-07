$(window).scroll(function() {
  var st = $(this).scrollTop();

  $(".parallax").css({
    "transform": "translate(0px, -" + st/3 + "px"
  });
  console.log(st);
  $(".parall").css({
    "transform": "translate(0px, -" + st/3 + "px"
  });
});

$(window).scroll(function()
{
     if  ($(window).scrollTop() >= $(document).height() - 1000)
     {
        $(".modal").css({
          "display":"none"
        });
     }
     else {
       $(".modal").css({
         "display":"inline"
       });
     }
});

$(window).scroll(function()
{
     if  ($(window).scrollTop() >= $(document).height() - 2200)
     {
        $(".fSlide").css({
          "display":"none"
        });
     }
     else {
       $(".fSlide").css({
         "display":"inline"
       });
     }
});

$(window).scroll(function()
{
     if  ($(window).scrollTop() >= 464 && $(window).scrollTop() <=1300)
     {
        $(".sSlide").css({
          "display":"inline"
        });
     }
     else {
       $(".sSlide").css({
         "display":"none"
       });
     }
});

$(window).scroll(function()
{
     if  ($(window).scrollTop() >= 1300)
     {
        $(".tSlide").css({
          "display":"inline"
        });
     }
     else {
       $(".tSlide").css({
         "display":"none"
       });
     }
});
