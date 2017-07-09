$(function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 93
        }, 1000);
        return false;
      }
    }
  });

  $(window).on("scroll", function() {

      var y = $(this).scrollTop();

      $('nav a').each(function (event) {
          if (y >= $($(this).attr('href')).offset().top - 95) {
              $('nav a').not(this).removeClass('current');
              $(this).addClass('current');
          }
      });

  });

  $('.mobile').on('click', function(){
    $('nav ul').slideToggle();
    if($('.mobile i.fa').hasClass('fa-bars')) {
      $('.mobile i.fa').removeClass('fa-bars').addClass('fa-times');
      $('body').css('overflow-y', 'hidden');
      $('#back-to-top').hide();
    } else {
      $('.mobile i.fa').removeClass('fa-times').addClass('fa-bars');
      $('body').css('overflow-y', 'visible');
      $('#back-to-top').show();
    }
  });

  $('nav a').on('click', function(){
    if($(window).width() < 768) {
      $('nav ul').slideUp();
      $('.mobile i.fa').removeClass('fa-times').addClass('fa-bars');
      $('body').css('overflow-y', 'visible');
      $('#back-to-top').show();
    }
  });


  $('.view-more').on('click', function(){
    $('.portfolio-5, .portfolio-6, .portfolio-7, .portfolio-8, .portfolio-9').fadeIn();
    $('.view-less').show();
    $('.view-more').hide();
  });

  $('.view-less').on('click', function(){
    $('.portfolio-5, .portfolio-6, .portfolio-7, .portfolio-8, .portfolio-9').fadeOut();
    $('.view-less').hide();
    $('.view-more').show();
  });


  if ($('#back-to-top').length) {
      var scrollTrigger = 750, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 750);
      });
  }


  $('.divider-image').on('click', function(){
    if ($(this).hasClass('image-1') == true && $(this).find('.hover-overlay').hasClass('active') == true) {
      $('.hover-overlay-1').removeClass('active');
      $('.overlay-1').addClass('active');
      $('.overlay-2').removeClass('active');
      $('.hover-overlay-2').addClass('active');
    } else if ($(this).hasClass('image-2') == true && $(this).find('.hover-overlay').hasClass('active') == true) {
      $('.hover-overlay-2').removeClass('active');
      $('.overlay-2').addClass('active');
      $('.overlay-3').removeClass('active');
      $('.hover-overlay-3').addClass('active');
    } else if ($(this).hasClass('image-3') == true && $(this).find('.hover-overlay').hasClass('active') == true) {
      $('.hover-overlay-3').removeClass('active');
      $('.overlay-3').addClass('active');
      $('.overlay-1').removeClass('active');
      $('.hover-overlay-1').addClass('active');
    } else {};
  });




  $('.portfolio-image').on('click', function() {
    // register is not visible lets make it visible.
    if($(this).find('.portfolio-overlay').css('opacity') === '0')
    {
      $(this).find('.portfolio-overlay').css({
        'opacity': '1'
      });
      $(this).find('.fa-search').css({
        'opacity': '0'
      });
    }
  });

  $('i.fa-times').on('click', function() {
    $(this).parent().css({
      'opacity': '0'
    });
    $(this).parent().siblings('.fa-search').css({
        'opacity': '1'
      });
  });



  $('.more-info').on('click', function() {
    $(this).find('.portfolio-overlay').css({
      'opacity': '1'
    });
    if($(this).css('right') === '-150px') {
      $(this).css({
        'right': '0'
      });
    } else {
      $(this).css({
        'right': '-150px'
      });
    }

    if($(this).find('.minus').css('display') === 'none') {
      $(this).find('.plus').hide();
      $(this).find('.minus').show();
    } else {
      $(this).find('.minus').hide();
      $(this).find('.plus').show();
    }
  });

});