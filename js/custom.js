





$(function(){
  function slideImg(){
    var now = $("#women .Slide > .item:first");
    $("#women .Slide").stop().animate({"left":"-330px"},1000,function(){
      $(this).append(now).css("left","0px");
    })
  }
  var timer = setInterval(slideImg,3000);

  $("#women .sec2 .btn>button").hover(
    function(){
      clearInterval(timer);
    },function(){
      timer = setInterval(slideImg,3000);
    }
  )
  $("#women .next").click(function(){
    if($("#women .Slide").is(":animated")) return false;
    var now = $("#women .Slide>.item:first");
    $("#women .Slide").stop().animate({"left":"-330px"},300,function(){
      $(this).append(now).css("left","0px");
    })
  })
  $("#women .prev").click(function(){
    if($("#women .Slide").is(":animated")) return false;
    var last = $("#women .Slide>.item:last");
    $("#women .Slide").prepend(last).css("left","-330px").animate({"left":0},300);
  })





  function slideImg2(){
    var now = $("#man .Slide > .item:first");
    $("#man .Slide").stop().animate({"left":"-330px"},1000,function(){
      $(this).append(now).css("left","0px");
    })
  }
  var timer2 = setInterval(slideImg2,3000);

  $("#man .sec2 .btn>button").hover(
    function(){
      clearInterval(timer2);
    },function(){
      timer2 = setInterval(slideImg2,3000);
    }
  )
  $("#man .next").click(function(){
    if($("#man .Slide").is(":animated")) return false;
    var now = $("#man .Slide>.item:first");
    $("#man .Slide").stop().animate({"left":"-330px"},300,function(){
      $(this).append(now).css("left","0px");
    })
  })
  $("#man .prev").click(function(){
    if($("#man .Slide").is(":animated")) return false;
    var last = $("#man .Slide>.item:last");
    $("#man .Slide").prepend(last).css("left","-330px").animate({"left":0},300);
  })


})

window.addEventListener("scroll",doScroll);

function doScroll(){
  var scrollMove = window.scrollY;
  var women = document.querySelector("#women")
  var ht = women.offsetHeight;
  var thisTop = scrollMove + women.getBoundingClientRect().top;
  var start = thisTop - ht;
  var end = thisTop + ht;
  if(scrollMove > start && scrollMove <= end){
    var value = scrollMove - start;
    document.querySelector("#women .bg2 img").style.left = -(value/3)+"px";
  }
}
doScroll();


window.addEventListener("scroll",doScroll2);


function doScroll2(){
  var scrollMove2 = window.scrollY;
  var man = document.querySelector("#man")
  var ht2 = man.offsetHeight;
  var thisTop2 = scrollMove2 + man.getBoundingClientRect().top;
  var start2 = thisTop2 - ht2;
  var end2 = thisTop2 + ht2;
  if(scrollMove2 > start2 && scrollMove2 <= end2){
    var value2 = scrollMove2 - start2;
    document.querySelector("#man .bg2 img").style.right = -(value2/3)+"px";
  }
}
doScroll2();


window.addEventListener("scroll",doScroll3);


function doScroll3(){
  var scrollMove3 = window.scrollY;
  var event = document.querySelector("#event")
  var ht3 = event.offsetHeight;
  var thisTop3 = scrollMove3 + event.getBoundingClientRect().top;
  var start3 = thisTop3 - ht3;
  var end3 = thisTop3 + ht3;
  if(scrollMove3 > start3 && scrollMove3 <= end3){
    var value3 = scrollMove3 - start3;
    document.querySelector("#event .bg2 img").style.left = -1100-(value3/3)+"px";
  }
}
doScroll3();

