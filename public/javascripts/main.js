var currPage;
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
                           "poem":"<div>a strong designer</div>"+
                                  "<div>UI UX, he knows it</div>"+
                                  "<div>an efficient man</div>",
                           "website":"http://portfolios.risd.edu/samjau"},

               "charles": {"image":"/assets/util/charlesPortrait.png",
                           "poem":"<div>the game master charles</div>"+
                                  "<div>fast with his fingers and mind</div>"+
                                  "<div>good for winning games</div>",
                           "website":"http://www.eactiv.com/"}
              };

$(document).ready(function(){
  console.log("PAGE: " + window.location.href + " is ready");
  initializeNavbar(); 
  $("#mainContent").load("/"+currPage);
});

function pageSetter(page){
  $("#mainContent").load("/"+page, function(res, status, xhr){
    if(status == 'success'){console.log("website started with "+page);};
  });
}

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
    $load.load("/"+route, function(res, status, xhr){
      if(status == "success"){
        changePage(route);
        console.log("page loaded to "+route);
      };
    });
  });
}

function changePage(page){
  if(currPage){
    $("#n_"+currPage).css("color", "grey");
    hoverOn($("#n_"+currPage), "pink", "grey");
    clickListener($("#n_"+currPage), $("#mainContent"), currPage);
  }

  $("#n_"+page).css({"color": "pink"});
  $("#n_"+page).unbind();
  currPage = page; 
}

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
  clickListener($("#n_title"), $("body"), "");
  clickListener($("#n_about"), $("#mainContent"), "about");
  clickListener($("#n_exhibitionOne"), $("#mainContent"), "exhibitionOne");
  clickListener($("#n_exhibitionTwo"), $("#mainContent"), "exhibitionTwo");
  clickListener($("#n_bottlePlantPattern"), $("#mainContent"), "bottlePlantPattern");
  clickListener($("#n_cinderblocks"), $("#mainContent"), "cinderblocks");
  clickListener($("#n_thetowergame"), $("#mainContent"), "thetowergame");
  clickListener($("#n_continuousProfiles"), $("#mainContent"), "continuousProfiles");
  clickListener($("#n_swingSlide"), $("#mainContent"), "swingSlide");
  clickListener($("#n_nola"), $("#mainContent"), "nola");
  clickListener($("#n_freefoodatbrown"), $("#mainContent"), "freefoodatbrown");
  clickListener($("#n_horseTable"), $("#mainContent"), "horseTable");
  clickListener($("#n_detentionTable"), $("#mainContent"), "detentionTable");
  clickListener($("#n_dothopper"), $("#mainContent"), "dothopper");
  clickListener($("#n_freeBeyonce"), $("#mainContent"), "freeBeyonce");
  clickListener($("#n_andyGlitch"), $("#mainContent"), "andyGlitch");
  clickListener($("#n_dogCase"), $("#mainContent"), "dogCase");
}
