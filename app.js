<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

  var intViewportHeight = window.innerHeight;
  var TopPageOne = window.innerHeight - window.innerHeight;
  var BottomPageOne = window.innerHeight;
  var TopPageTwo = BottomPageOne;
  var BottomPageTwo = window.innerHeight * 2;
  var TopPageThree = BottomPageTwo;
  var BottomPageThree = window.innerHeight * 3;
  var TopPageFour = BottomPageThree;
  var BottomPageFour = window.innerHeight * 4;


  $(window).scroll(function () {
    if ($(document).scrollTop() >= TopPageOne && $(document).scrollTop() < BottomPageOne) {
      $('.nav-link1').addClass('active');
    } else {
      $('.nav-link1').removeClass('active');
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() >= TopPageTwo && $(document).scrollTop() < BottomPageTwo) {
      $('.nav-link2').addClass('active');
    } else {
      $('.nav-link2').removeClass('active');
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() >= TopPageThree && $(document).scrollTop() < BottomPageThree) {
      $('.nav-link3').addClass('active');
    } else {
      $('.nav-link3').removeClass('active');
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() >= TopPageFour && $(document).scrollTop() < BottomPageFour) {
      $('.nav-link4').addClass('active');
    } else {
      $('.nav-link4').removeClass('active');
    }
  });
