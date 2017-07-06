$(function () {
    $('.nxt').on('click', function () {
        if ($('img:last-child').hasClass('active') && $('span:last-child').hasClass('effect')) {
            $('img:last-child').removeClass('active').next($('.slider img').first().addClass('active'));
            $('span').removeClass('effect').next($('span').first().addClass('effect'));
        }
        else {
            $('img.active').removeClass('active').next().addClass('active');
            $('span.effect').removeClass('effect').next().addClass('effect');
        }
    });
    $('.prev').on('click', function () {
        if ($('img:first-child').hasClass('active') && $('span:first-child').hasClass('effect')) {
            $('img:first-child').removeClass('active').prev($('.slider img').last().addClass('active'));
            $('span').removeClass('effect').prev($('span').last().addClass('effect'));
        }
        else {
            $('img.active').removeClass('active').prev().addClass('active');
            $('span.effect').removeClass('effect').prev().addClass('effect');
        }
    });
    $('#first').on('click', function () {
        $('img').removeClass('active');
        $('span.effect').removeClass('effect');
        $('img:first-child').addClass('active');
        $('span:first-child').addClass('effect');
    });
    $('#second').on('click', function () {
        $('img').removeClass('active');
        $('span.effect').removeClass('effect');
        $('img:nth-child(2)').addClass('active');
        $('span:nth-child(2)').addClass('effect');
    });
    $('#third').on('click', function () {
        $('img').removeClass('active');
        $('span.effect').removeClass('effect');
        $('img:nth-child(3)').addClass('active');
        $('span:nth-child(3)').addClass('effect');
    });
    $('#fourth').on('click', function () {
        $('img').removeClass('active');
        $('span.effect').removeClass('effect');
        $('img:last-child').addClass('active');
        $('span:last-child').addClass('effect');
    });
});
//# sourceMappingURL=slider.js.map