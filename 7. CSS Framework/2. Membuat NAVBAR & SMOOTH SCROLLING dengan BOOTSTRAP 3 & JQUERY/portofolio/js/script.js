// Event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var target = $(this).attr('href');
    // tangkap element ybs
    var elemenTarget = $(target);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTarget.offset().top -50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});