   window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("logo").setAttribute("transform", "scale(0.7)");
            document.getElementById("logo").style.opacity = "0.5";
            document.getElementById("gitSVG").setAttribute("transform", "scale(0.7)");
            document.getElementById("gitSVG").style.opacity = "0.5";
            /*document.getElementById("nav").style.opacity = "0.2";*/
            document.getElementById("nav-link1").classList.add("scrolledNav");
            document.getElementById("nav-link2").classList.add("scrolledNav");
            document.getElementById("nav-link3").classList.add("scrolledNav");
            document.getElementById("nav-link4").classList.add("scrolledNav");
        } else {
            document.getElementById("logo").setAttribute("transform", "scale(1)");
            document.getElementById("logo").style.opacity = "1";
            document.getElementById("gitSVG").setAttribute("transform", "scale(1)");
            document.getElementById("gitSVG").style.opacity = "1";
            /*document.getElementById("nav").style.opacity = "1";*/
            document.getElementById("nav-link1").classList.remove("scrolledNav");
            document.getElementById("nav-link2").classList.remove("scrolledNav");
            document.getElementById("nav-link3").classList.remove("scrolledNav");
            document.getElementById("nav-link4").classList.remove("scrolledNav");
        }
    }

    $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    if ($('#page1scrollIndicator').isInViewport()) {
        document.getElementById("nav-link1").classList.add("active");
        document.getElementById("nav-link2").classList.remove("active");
        document.getElementById("nav-link3").classList.remove("active");
        document.getElementById("nav-link4").classList.remove("active");
    } else if ($('#page3scrollIndicator').isInViewport() && !$('#page2scrollIndicator').isInViewport()){
        document.getElementById("nav-link1").classList.remove("active");
        document.getElementById("nav-link2").classList.remove("active");
        document.getElementById("nav-link3").classList.remove("active");
        document.getElementById("nav-link4").classList.add("active");
    } else {
        document.getElementById("nav-link1").classList.remove("active");
        document.getElementById("nav-link2").classList.add("active");
        document.getElementById("nav-link3").classList.add("active");
        document.getElementById("nav-link4").classList.remove("active");
    }
});
