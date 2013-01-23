function clickThumb(page){
  $("#"+page+"Thumb").click(function(){
    currPage = page;
    $('body').load('/main');
  });
}

$(document).ready(function(){
  console.log("PAGE: " + window.location.href + " is ready");
  clickThumb("dothopper");
  clickThumb("freeBeyonce");
  clickThumb("horseTable");
  clickThumb("detentionTable");
  clickThumb("freefoodatbrown");
  clickThumb("nola");
  clickThumb("thetowergame");
  clickThumb("continuousProfiles");
  clickThumb("swingSlide");
  clickThumb("bottlePlantPattern");
  clickThumb("cinderblocks");
  clickThumb("exhibitionTwo");
  clickThumb("exhibitionOne"); 

  $(".cover").hover(function(){
    $(this).css({"opacity": "0.8",
                 "cursor":"pointer"});
  }, function(){
    $(this).css({"opacity": "0.0",
                 "cursor":"auto"});
  });
});
