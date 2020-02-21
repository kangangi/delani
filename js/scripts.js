$(document).ready(function(){
  $("#design img").click(function(){
    $("#design p").show();
    $("#design img").hide();

  });
  $("#design p").click(function(){
    $("#design p").hide();
    $("#design img").show();
  });

  $("#development img").click(function(){
    $("#development p").show();
      $("#development img").hide();
  });

  $("#development p").click(function(){
    $("#development p").hide();
    $("#development img").show();
  });

  $("#product img").click(function(){
    $("#product p").show();
      $("#product img").hide();
  });

  $("#product p").click(function(){
    $("#product p").hide();
    $("#product img").show();
  });
});
