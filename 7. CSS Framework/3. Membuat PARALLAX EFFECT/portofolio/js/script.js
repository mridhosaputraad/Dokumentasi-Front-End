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

// Membuat parallax landing element pada about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})

// Fungsi Scroll
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    // Membuat parallax slow element pada jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // Membuat Parallax Landing Element pada portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }
});