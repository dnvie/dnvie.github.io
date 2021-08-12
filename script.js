$(window).on("load", $('#clip').addClass('active'));

function circleOpen() {
    $('#circle').addClass('active');
    $('#circle2').addClass('active');
    $('#circle3').addClass('active');
    $('#clip').addClass('hide');
    $(".nav-link").addClass('hide');
    $('#closebtn').addClass('show');
    $(".link").addClass('hide');
    $("header").addClass('hide');
};

function behanceAdd() {
    $('#behance').addClass('show');
};

function photoAdd() {
    $('#photo').addClass('show');
};

function motionAdd() {
    $('#motion').addClass('show');
};

function circleClose() {
    $('#circle').removeClass('active');
    $('#circle2').removeClass('active');
    $('#circle3').removeClass('active');
    $('#clip').removeClass('hide');
    $(".nav-link").removeClass('hide');
    $('#closebtn').removeClass('show');
    $('#behance').removeClass('show');
    $('#photo').removeClass('show');
    $('#motion').removeClass('show');
    $(".link").removeClass('hide');
    $("header").removeClass('hide');
};