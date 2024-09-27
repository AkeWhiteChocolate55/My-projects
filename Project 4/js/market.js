$('.hd-kat').click(function() {
    $('.goods').hide();
    $('.hd-kat').hide();
    $('.hd-kat-open').show();
    $('.menu').show();
})

$('.hd-kat-open').click(function() {
    $('.hd-kat-open').hide();
    $('.menu').hide();
    $('.hd-kat').show();
    $('.goods').show();
})
