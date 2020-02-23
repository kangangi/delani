document.getElementById("submit").addEventListener("click",function(event){
  event.preventDefault()
})
function sendMsg(){
  alert("your message has been received")
}




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
$('#work1 img').hover(function () {
    $(this).stop().animate({
    opacity: .4
    });
    $('.caption1').removeClass('hide');
    }, function () {
    $(this).stop().animate({
      opacity: 1
    });
    $('.caption1').addClass('hide');
    });

  $('#work2 img').hover(function () {
      $(this).stop().animate({
        opacity: .4
        });
      $('.caption2').removeClass('hide');
        }, function () {
      $(this).stop().animate({
          opacity: 1
        });
      $('.caption2').addClass('hide');
        });

    $('#work3 img').hover(function () {
      $(this).stop().animate({
              opacity: .4
              });
      $('.caption3').removeClass('hide');
              }, function () {
      $(this).stop().animate({
                opacity: 1
              });
      $('.caption3').addClass('hide');
              });

  $('#work4 img').hover(function () {
    $(this).stop().animate({
        opacity: .4
      });
    $('.caption4').removeClass('hide');
      }, function () {
    $(this).stop().animate({
      opacity: 1
    });
  $('.caption4').addClass('hide');
  });

  $('#work5 img').hover(function () {
    $(this).stop().animate({
        opacity: .4
      });
    $('.caption5').removeClass('hide');
      }, function () {
    $(this).stop().animate({
      opacity: 1
    });
  $('.caption5').addClass('hide');
  });

  $('#work6 img').hover(function () {
    $(this).stop().animate({
        opacity: .4
      });
    $('.caption6').removeClass('hide');
      }, function () {
    $(this).stop().animate({
      opacity: 1
    });
  $('.caption6').addClass('hide');
  });

  $('#work7 img').hover(function () {
    $(this).stop().animate({
        opacity: .4
      });
    $('.caption7').removeClass('hide');
      }, function () {
    $(this).stop().animate({
      opacity: 1
    });
  $('.caption7').addClass('hide');
  });

  $('#work8 img').hover(function () {
    $(this).stop().animate({
        opacity: .4
      });
    $('.caption8').removeClass('hide');
      }, function () {
    $(this).stop().animate({
      opacity: 1
    });
  $('.caption8').addClass('hide');
  });

});
