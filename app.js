$(document).ready(function () {

    $(window).scroll(debounce(function () {
        if (this.scrollY > 100) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    }, 250));

    const nav = $('#nav')
    $('.menu-icon').click(function() {
        nav.toggleClass('show');
      });

      $('nav li a').click(function() {
        nav.toggleClass('show');
      });

});

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};