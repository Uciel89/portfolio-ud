window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".primary-header").style.backgroundColor = 'hsl(0 0% 0% / 0.5)';
    } else {
        document.querySelector(".primary-header").style.background = "transparent";
    }
}

$(window).on("load", function () {
    $(".container").fadeOut()
});

