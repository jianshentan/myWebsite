function clickThumb(page){
  $("#"+page+"Thumb").click(function(){
    currPage = page;
    $('body').load('/main');
  });
}

$(document).ready(function(){
  console.log("PAGE: " + window.location.href + " is ready");
  
  $("#about").hover(function(){
    $(this).css({"color": "pink",
                 "cursor": "pointer"});
  }, function(){
    $(this).css({"color":"black", 
                 "cursor":"auto"});
  });

  $("#about").click(function(){
    currPage = "about";
    $('body').load('/main');
  });

  clickThumb("dothopper");
  clickThumb("freeBeyonce");
  clickThumb("horseTable");
  clickThumb("detentionTable");
  clickThumb("andyGlitch");
  clickThumb("freefoodatbrown");
  clickThumb("nola");
  clickThumb("thetowergame");
  clickThumb("continuousProfiles");
  clickThumb("swingSlide");
  clickThumb("bottlePlantPattern");
  clickThumb("cinderblocks");
  clickThumb("exhibitionTwo");
  clickThumb("exhibitionOne"); 
  clickThumb("dogCase");
  clickThumb("concreteComfort");

  $(".cover").hover(function(){
    $(this).css({"opacity": "0.8",
                 "cursor":"pointer"});
  }, function(){
    $(this).css({"opacity": "0.0",
                 "cursor":"auto"});
  });

  
});
