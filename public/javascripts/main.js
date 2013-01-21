$(document).ready(function(){
  console.log("PAGE: " + window.location.href + " is ready");
  initializeNavbar(); 
});

//allows leftContent scrolls horizontally, but keeps it fixed vertically
$(window).scroll(function(event) {
   var scrollLeft = $(window).scrollLeft();
   $("#leftContent").css("left", -scrollLeft);
});

//general customizable hover function
function hoverOn($div, colorA, colorB){
  $div.hover(function(){
    $(this).css({"color":colorA,
                 "cursor":"pointer"});
  }, function(){
    $(this).css({"color":colorB,
                 "cursor":"auto"});
  });
}

function clickListener($listener, $load, route){
  $listener.click(function(){
    $load.load(route, function(res, status, xhr){
      if(status == "success"){console.log("page loaded to "+route);};
    });
  });
}

var friends = {"lukas":   {"image":"/assets/util/lukasPortrait.png",
                           "poem":"<div>my friend the beard man</div>"+
                                  "<div>an icecream and serra fan</div>"+
                                  "<div>passionate. so cool</div>",
                           "website":"http://www.lukasbentel.com"},
 
               "koji":    {"image":"/assets/util/kojiPortrait.png",
                           "poem":"<div>oh he is so strong!</div>"+
                                  "<div>zippy fingers loves to type</div>"+
                                  "<div>and when stressed, he cleans</div>",
                           "website":"http://www.kojiiii.com"},

               "kevin":   {"image":"/assets/util/kevinPortrait.png",
                           "poem":"<div>a turtle necked fella</div>"+
                                  "<div>and often times full of class</div>"+
                                  "<div>damn, this man. wo cao.</div>",
                           "website":"http://cargocollective.com/kevinkwiesner"},

               "sam":     {"image":"/assets/util/samPortrait.png",
                           "poem":"<div>this is a poem for sam</div>"+
                                  "<div>line 2 of poerm for sam</div>"+
                                  "<div>last line of porm for sam</div>",
                           "website":"http://portfolios.risd.edu/samjau"},

               "charles": {"image":"/assets/util/charlesPortrait.png",
                           "poem":"<div>this is a poem for charles</div>"+
                                  "<div>line 2 of the poem for charles</div>"+
                                  "<div>last line of the poem for him</div>",
                           "website":"http://www.eactiv.com/"}
              };

function clickOnFriend($div, friend){
  hoverOn($div, "grey", "pink");  
  $div.click(function(){
    $(".friendWindowImage").attr('src',friends[friend].image);
    $(".friendWindowPoem").html(friends[friend].poem);
    $(".friendWindowWebsite").html("<a href="+friends[friend].website+">"+friends[friend].website+"</a>");

    $("body").scrollTop(0); //scrolls page to the top
    $("body").css("overflow", "hidden"); //disables page scrolling
    $("#transparentOverlay").fadeIn("fast");
    $("#friendWindow").slideDown("fast");
  });

  $("#transparentOverlay").click(function(){
    $("#transparentOverlay").fadeOut("fast");
    $("#friendWindow").fadeOut("fast");
    $("body").css("overflow", "auto");
  });
}

function initializeNavbar(){
  //init hover functionality for all buttons
  hoverOn($("#navbar div"), "pink", "grey");

  //init click functionality for all buttons
  clickListener($("#n_title"), $("body"), "/");
  clickListener($("#n_about"), $("#mainContent"), "/about");
  clickListener($("#n_exhibitionOne"), $("#mainContent"), "/exhibitionOne");
  clickListener($("#n_exhibitionTwo"), $("#mainContent"), "/exhibitionTwo");
  clickListener($("#n_bottlePlantPattern"), $("#mainContent"), "/bottlePlantPattern");
  clickListener($("#n_cinderblocks"), $("#mainContent"), "/cinderblocks");
  clickListener($("#n_thetowergame"), $("#mainContent"), "/thetowergame");
  clickListener($("#n_continuousProfiles"), $("#mainContent"), "/continuousProfiles");
  clickListener($("#n_swingSlide"), $("#mainContent"), "/swingSlide");
  clickListener($("#n_nola"), $("#mainContent"), "/nola");
  clickListener($("#n_freefoodatbrown"), $("#mainContent"), "/freefoodatbrown");
  clickListener($("#n_horseTable"), $("#mainContent"), "/horseTable");
}