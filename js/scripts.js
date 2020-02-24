//send alert to user
function sendMsg(){
  var name = $("#mce-FNAME").val();
  var email =$("#mce-EMAIL").val();
  var message=$("#mce-MMERGE2").val();
  if (name === "" || email === ""){
    alert("Please fill in the form")
  } else{
  alert("Thank you " + name +  "! Your message has been received")
};
};
$(document).ready(function(){
//toggle functionality
var services =["design", "development", "product"]
services.forEach(function(service){
   $("#"+service+ " img").click(function(){
     $("#"+service+ " p").show()
     $("#"+service+ " img").hide()
   });
   $("#"+service + " p").click(function(){
     $("#"+service + " img").show()
     $("#"+service + " p").hide()
   });
});
//hovering effect
 var works = ["work1", "work2","work3", "work4","work5", "work6","work7", "work8"]
 works.forEach(function(work){
   $("#" +work+ " img").hover(function() {
     $("."+work).toggle()
   });
 });
});
