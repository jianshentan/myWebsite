$(document).ready(function(){
  console.log("PAGE: " + window.location.href + " is ready");
  $("#enterButton").click(function(){
    $('body').load('/main');
  });
});
