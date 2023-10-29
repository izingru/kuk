(function ($) {
  $(function () {

    /* popup */
    $('.js-popup_btn').on('click', function (e) {
      e.preventDefault();

      if ($('#js-popup-form').css('display') == 'none') {
        $('#js-popup-form').fadeIn();
        $('html, body').addClass('js-ag-body-noscroll');
      }
    });

    $('#js-popup-form_btn__close').on('click', function () {
      agPopupClose()
    });

    function agPopupClose() {
      if ($('#js-popup-form').css('display') == 'block') {
        $('#js-popup-form').fadeOut();
        $('html, body').removeClass('js-ag-body-noscroll');
      }
    }

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* 'Esc' key (27) */
      if (e.keyCode == 27 && $('#js-popup-form').is(':visible')) {
        agPopupClose();
      }
    });

    $(document).mouseup(function (e) {
      if ((!$('#js-popup-form').is(e.target) && $('#js-popup-form').has(e.target).length === 0)) {
        agPopupClose();
      }
    });
    /* /popup */

    /* header menu */
    $('#js-menu_btn').on('click', function (e) {
      e.preventDefault();

      if ($('#js-menu').css('display') == 'none') {
        $('#js-menu').slideDown();
      }
    });

    $('#js-menu_btn__close').on('click', function () {
      agMenuClose()
    });

    function agMenuClose() {
      if ($('#js-menu').css('display') == 'block') {
        $('#js-menu').slideUp();
      }
    }

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* 'Esc' key (27) */
      if (e.keyCode == 27 && $('#js-menu').is(':visible')) {
        agMenuClose();
      }
    });

    $(document).mouseup(function (e) {
      if ((!$('#js-menu').is(e.target) && $('#js-menu').has(e.target).length === 0)) {
        agMenuClose();
      }
    });

    /*
    $(window).on('scroll', function () {
      agHeaderFix();
    });

    agHeaderFix();

    function agHeaderFix() {
      var agMenu = $('.js-primary');

      if ($(window).scrollTop() >= 550) {
        agMenu.addClass('js-ag-header__fixed');
      } else if ($(window).scrollTop() <= 1) {
        agMenu.removeClass('js-ag-header__fixed');
      }
    }
    */
    /* /header menu */

    /* slider main */
    $('.js-main-slider').slick({
      autoplay: true,
      autoplaySpeed: 40000,
      dots: true,
      prevArrow: false,
      nextArrow: false,
      dotsClass: 'js-ag-main-slider-dots_list ag-format-container',
      customPaging : function(slider, i) {
        var agZero;

        if(i < 9) {
          agZero = '0'
        }else{
          agZero = ''
        }

        return '<div class="js-ag-main-slider-dots_item">' + agZero + (i+1) + '</div>' +
          '<div class="js-ag-main-slider-dots_item__small">' + agZero + (i+1) + '</div>';
      },
    });
    /* /slider main */

    /* slider */
    $('.js-slider').slick({
      autoplay: true,
      dots: true,
      prevArrow: false,
      nextArrow: false,
      dotsClass: 'js-ag-slider-news-dots_list',
      customPaging : function(slider, i) {
        return '<i class="js-ag-slider-news-dots_item"></i>';
      },
    });
    /* /slider */

    /* slider gallery */
    $('.js-slider-gallery_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-slider-gallery_nav',
    });
    $('.js-slider-gallery_nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.js-slider-gallery_for',
      centerMode: true,
      focusOnSelect: true,
      prevArrow: '.js-ag-slider-gallery-arrow_prev',
      nextArrow: '.js-ag-slider-gallery-arrow_next',
      responsive: [{
        breakpoint: 979,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
    });
    /* /slider gallery */

    /* carousel main */
    $('.js-main-carousel').slick({
      autoplay: true,
      autoplaySpeed: 6000,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      arrows: false,
      responsive: [{
        breakpoint: 979,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    /* /carousel main */

    /* carousel home tile */
    $(window).on('resize', function (e) {
      var agFlag = $('.js-carousel-home-tile').data('init-slider');
      if (window.innerWidth < 768) {
        if (agFlag != 1) {
          $('.js-carousel-home-tile').slick({
            autoplay: true,
            autoplaySpeed: 60000,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: '.js-ag-carousel-home-tile-arrow_prev',
            nextArrow: '.js-ag-carousel-home-tile-arrow_next'
          }).data({'init-slider': 1});
        }
      } else {
        if (agFlag == 1) {
          $('.js-carousel-home-tile').slick('unslick').data({'init-slider': 0});
        }
      }

      console.log(agFlag);
    }).trigger('resize');
    /* /carousel home tile */

    /* carousel */
    $('.js-carousel').slick({
      autoplay: true,
      autoplaySpeed: 6000,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      prevArrow: '.js-ag-carousel-arrow_prev',
      nextArrow: '.js-ag-carousel-arrow_next',
      responsive: [{
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    /* /carousel */

    /* carousel tiktok video */
    $('.js-tiktok-video-carousel').slick({
      autoplay: true,
      autoplaySpeed: 6000,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      prevArrow: '.js-ag-tiktok-video-carousel-arrow_prev',
      nextArrow: '.js-ag-tiktok-video-carousel-arrow_next',
      responsive: [{
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    /* /carousel tiktok video */

    /* carousel tiktok review */
    $('.js-review-carousel', '.js-vertical-carousel').slick({
      autoplaySpeed: 60000,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      //infinite: false,
      prevArrow: '.js-ag-review-carousel-arrow_prev',
      nextArrow: '.js-ag-review-carousel-arrow_next'
    });
    /* /carousel tiktok review */



    /* video gallery */
    window.youTuber = {
      template: '<iframe width="100%" height="100%" allow="autoplay" src="https://www.youtube.com/embed/[%videoid%]?autoplay=1&amp;origin=https%3A%2F%2Fkuk.edu.ua" allowfullscreen="" frameborder="0" allowfullscreen=""></iframe>',

      init: function(selector) {
        $(selector).on('click', function() {
          if ($(this).find("iframe").size() == 0) {
            youTuber.loadItem($(this));
          }
        });
      },

      loadItem: function (container) {
        var videoId = container.attr('data-video-id');

        if (typeof videoId !== 'undefined') {
          container.html(youTuber.template.replace("[%videoid%]", videoId));
          /*container.addClass("js-ag-video-played");*/
        }
      }

    }

    youTuber.init('.js-videos');
    /* /video gallery */

    /* tabs */
    function fnTabs() {
      var agTabs = $('.js-tabs'),
        agTabLink = agTabs.children('li').children('.js-pdf-tab_link');

      agTabLink.on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
          agID = $this.attr('href');

        if ($this.hasClass('js-ag-pdf-tab_link__active')) {
          return e.preventDefault();
        }

        $('.js-pdf-frame_item').hide();

        $(agID).fadeIn();

        agTabLink.removeClass('js-ag-pdf-tab_link__active');

        $this.addClass('js-ag-pdf-tab_link__active');

        $('body, html').animate({scrollTop: $('.ag-pdf-frame').offset().top}, 500);

        return false;

      });
    }

    /* /tabs */

    /* categories tabs */
    function fnCatPDF() {
      $('.js-pdf-tab_title-list').on('click', function () {
        var agCatPDF = $(this).parent('.js-ag-pdf-tab-cat_item__no-empty').children('.js-tabs');

        if (agCatPDF.css('display') == 'none') {
          agCatPDF.slideDown();

          $(this).parent('.js-ag-pdf-tab-cat_item__no-empty').addClass('js-ag-pdf-tab-cat_item__active');
        }else{
          agCatPDF.slideUp();

          $(this).parent('.js-ag-pdf-tab-cat_item__no-empty').removeClass('js-ag-pdf-tab-cat_item__active');
        }
      });
    }

    /* /categories tabs */
    $(window).on("load", function() {

      fnTabs();

      fnCatPDF();

    });

    /* video to */
    $('.js-video-to_btn').on('click', function (e) {
      e.preventDefault();

      var anchorForm = $('.js-video-anchor').offset().top - 150;

      $('body, html').animate({scrollTop: anchorForm}, 500);
    });
    /* /video to */


  });
})(jQuery);