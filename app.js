$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY - this.innerHeight > 100) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    });
});