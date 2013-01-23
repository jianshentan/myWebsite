var currImage = 0;
var imageInfo = [{"src":"/assets/exhibitionTwo/exhibitionTwo_chiming01.png",
                  "title":"Childhood Colors",
                  "size":"20 X 20cm",
                  "year":"2012"},
                 {"src":"/assets/exhibitionTwo/exhibitionTwo_chiming02.png",
                  "title":"Ballet Dream I",
                  "size":"60 X 60cm",
                  "year":"2012"},
                 /*
                 {"src":"/assets/exhibitionTwo/exhibitionTwo_chiming03.png",
                  "title":"Friendship II",
                  "size":"50 X 40cm",
                  "year": "2010"},
                 */
                 {"src":"/assets/exhibitionTwo/exhibitionTwo_chiming04.png",
                  "title":"Ballet Dream II",
                  "size":"80cm D",
                  "year":"2012"}];

function updatePrevNextButton(){
  if(currImage == 0){ //first image
    $("#prevImage").css('visibility', 'hidden');    
    $("#nextImage").css('visibility', 'visible');    
  }
  else if(currImage == imageInfo.length - 1){ //last image
    $("#prevImage").css('visibility', 'visible');
    $("#nextImage").css('visibility', 'hidden');    
  }
  else{ //image inbetween
    $("#prevImage").css('visibility', 'visible');
    $("#nextImage").css('visibility', 'visible');
  }
}

function updateWork(){
  $("#chimingImage").attr('src', imageInfo[currImage].src); 
  $("#chimingTitle").html(imageInfo[currImage].title);
  $("#chimingSize").html(imageInfo[currImage].size);
  $("#chimingYear").html(imageInfo[currImage].year); 
}

$(document).ready(function(){
  hoverOn($("#prevImage"), "grey", "black");
  hoverOn($("#nextImage"), "grey", "black");

  $("#prevImage").click(function(){
    currImage--;
    updateWork();
    updatePrevNextButton();
  });
  $("#nextImage").click(function(){
    currImage++;
    updateWork();
    updatePrevNextButton();
  });
  updateWork(); 
  updatePrevNextButton();
});
