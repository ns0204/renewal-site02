$(function(){

  var count = 0;

  $(".navi > li").click(function(e){
    e.preventDefault();
    count = $(this).index();
    //메뉴 활성화
    activation();

    //스크롤 이동

    doScroll();


  });

  function activation(){
    console.log(count % 2)
      if(count % 2){
        $(".logo, .navi").addClass("active");
      }else{
        $(".logo, .navi").removeClass("active");
      }
    $(".navi > li").removeClass("on").eq(count).addClass("on");
  }

  function doScroll(){
    var secTop = $("section").eq(count).offset().top;
    console.log(secTop)
    $("html,body").stop().animate({"scrollTop":secTop},500)
    activation();
  }
  doScroll();

  $("main").on("wheel",function(e){
    e.preventDefault();
    if($("html,body").is(":animated"))return false;
    console.log(e)
    var deltaY = e.originalEvent.deltaY;
    if(deltaY < 0){//마우스를 위로 올렸을때
      count--;
      if(count < 0) count = 0;

      doScroll();
    }else{
      count++;
      if(count >= $("section").length) count = $("section").length-1
      doScroll();
    }
  })
});