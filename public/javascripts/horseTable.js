$(document).ready(function(){
  for(var i=1; i<17; i++){
    var foo = (function(j){
      var bar = function(){
        $("#horseTableGridCover"+j).css({"opacity":"0.2"});
        $("#horseTableGridDescription"+j).css({"opacity":"1.0",
                                               "z-index":"100"});
      }
      return bar;
    })(i);
    var boo = (function(j){
      var far = function(){
        $("#horseTableGridCover"+j).css({"opacity":"0.0"});
        $("#horseTableGridDescription"+j).css({"opacity":"0.0",
                                               "z-index":"100"});
      }
      return far;
    })(i);
    $("#horseTableGridDescription"+i).hover(foo, boo);
  } 

  $(".hoverShades").hover(function(){
    $("#gangnamStyleShades").css({"visibility":"visible"});
  }, function(){
    $("#gangnamStyleShades").css({"visibility":"hidden"});
  });

});

