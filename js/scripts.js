//send message to user once clicked
function sendMsg(){
  var name = $("#mce-FNAME").val();
  var email =$("#mce-EMAIL").val();
  var message=$("#mce-MMERGE2").val();
  alert("Thank you " + name +  "! Your message has been received")
};
//toggle function
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

  //hovering function
  $('#work1 img').hover(function() {
    $('.work1').toggle()
  });
  $('#work2 img').hover(function() {
    $('.work2').toggle()
  });
  $('#work3 img').hover(function() {
    $('.work3').toggle()
  });
  $('#work4 img').hover(function() {
    $('.work4').toggle()
  });
  $('#work5 img').hover(function() {
    $('.work5').toggle()
  });
  $('#work6 img').hover(function() {
    $('.work6').toggle()
  });
  $('#work7 img').hover(function() {
    $('.work7').toggle()
  });
  $('#work8 img').hover(function() {
    $('.work8').toggle()
  });
});
