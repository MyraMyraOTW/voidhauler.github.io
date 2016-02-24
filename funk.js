var sPosition = 0;
var wide = $(window).width();

$(function () {
    $(window).scroll(function () {
        sPosition++;
        sPosition = sPosition + 2;

        var stransform = "translateX(" + sPosition ")"
        if (sPosition > wide) {
            sPosition = 0;
        }

        $(".bob").css({
            "-moz-transform": stransform,
            "-webkit-transform": stransform
        });
    });
});