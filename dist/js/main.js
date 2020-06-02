(function ($) {
    $(function() {
        // 1. Animate ---------------------------
        new WOW().init();

        // 2. Open main menu mobile version ---------------------------
        function openMainMenu() {
            $('.js_nav').on('click', function (e) {
                e.preventDefault();
                var body = $('body');
                if (body.hasClass('mobile-menu--open')) {
                    body.removeClass('mobile-menu--open');
                } else {
                    body.addClass('mobile-menu--open');
                }
            });
        }

        openMainMenu();

        // 3. Selects ---------------------------
        function customSelect() {
            $('.js_select').selectize({
                create: false,
                //sortField: 'text'
                maxItems: 1,
                valueField: 'value',
                labelField: 'title',
                searchField: ['title']
            });
        }

        customSelect();


        // 4. Mobile slider excellence ---------------------------
        function sliderExcellenceMobile() {
            var excellenceList = $('.excellence__list'),
                winW = $(window).outerWidth();

            if(winW < 1025) {
                excellenceList.addClass('excellence__slider');
            }
            else {
                excellenceList.removeClass('excellence__slider');
            }

            if($('.excellence__slider').length) {
                var mobileSlider = $('.excellence__slider');

                mobileSlider.slick({
                    vertical: false,
                    dots: false,
                    infinite: true,
                    arrows: false,
                    nextArrow: '',
                    prevArrow: '',
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: true
                });
            }
        }

        sliderExcellenceMobile();
        $(window).on('resize', function(){
            sliderExcellenceMobile();
        });


        // 6. Slider news ---------------------------
        function sliderNews() {
            var sliderNews = $('.slider__news'),
                next = $('.slider-news__nav--right'),
                prev = $('.slider-news__nav--left');

            sliderNews.slick({
                vertical: false,
                dots: true,
                infinite: true,
                arrows: true,
                speed: 500,
                cssEase: 'linear',
                nextArrow: '',
                prevArrow: '',
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 425,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                    }
                }],
            });

            next.on('click', function(e) {
                e.preventDefault();
                sliderNews.slick('slickNext');
            });

            prev.on('click', function(e) {
                e.preventDefault();
                sliderNews.slick('slickPrev');
            });
        }

        sliderNews();

        // 7. Mobile slider price ---------------------------
        function sliderPriceMobile() {
            var priceList = $('.price__list'),
                winW = $(window).outerWidth();

            if(winW < 1025) {
                priceList.addClass('price__slider');
            }
            else {
                priceList.removeClass('price__slider');
            }

            if($('.price__slider').length) {
                var mobileSlider = $('.price__slider');

                mobileSlider.slick({
                    vertical: false,
                    dots: true,
                    infinite: true,
                    arrows: false,
                    nextArrow: '',
                    prevArrow: '',
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: true
                });
            }
        }

        sliderPriceMobile();
        $(window).on('resize', function(){
            sliderPriceMobile();
        });

        // 8. Mobile slider services ---------------------------
        function sliderServicesMobile() {
            var servicesList = $('.services__list'),
                winW = $(window).outerWidth();

            if(winW < 768) {
                servicesList.addClass('services__slider');
            }
            else {
                servicesList.removeClass('services__slider');
            }

            if($('.services__slider').length) {
                var mobileSlider = $('.services__slider');

                mobileSlider.slick({
                    vertical: false,
                    dots: true,
                    infinite: true,
                    arrows: false,
                    nextArrow: '',
                    prevArrow: '',
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: true
                });
            }
        }

        sliderServicesMobile();
        $(window).on('resize', function(){
            sliderServicesMobile();
        });


		// 9. Fix share on scroll page
        $('.form-submit').on('click', function(){
          var formItem = $(this).closest('.form');

          var name = formItem.find('input[name="name"]').val();
          var phone = formItem.find('input[name="phone"]').val();
          var email = formItem.find('input[name="email"]').val();

          $.ajax(
              {
                  type: "POST",
                  url: 'http://35it.ru/mail.php',
                  data: { name: name, phone: phone, email: email },
                  success: function (data) {
                      if(data === '1') {
                          console.log(data);
                          console.log("Ok!");
                          $('.success').show();
                      }
                  }
              }
          );
          return false;
        });

        // 10. Fix share on scroll page
        function bindEventHandlers() {
            $(document).on("scroll", eventTopButton);
        }

        function eventTopButton() {
            var upBtn = $(".up__btn");

            ($(document).scrollTop() > 500) ? upBtn.not(".visible").addClass("visible") : upBtn.removeClass("visible");
        }

        bindEventHandlers();

        // 11. Smooth Scroll Link
        function addSmoothScroll() {
            $('.js-scroll-arrow').on('click.smoothscroll', function(e){
                e.preventDefault();

                var hash = this.hash, $target, hashClear = hash.replace(/#/,'');
                if( hashClear == '' ) $target = $('body');
                else $target = $( hash + ', a[name="'+ hashClear +'"]').first();
                var theHref = $(this).attr('href').replace(/#.*/,'');
                if( ! $target.length || (theHref && location.href.replace(/#.*/,'') != theHref)  ) return;

                $('html, body').stop().animate({ scrollTop: $target.offset().top }, 1000, 'swing', function(){
                    window.location.hash = hash;
                });
            });
        }

        addSmoothScroll();


        /*
         * 12. Show fixed menu when scrolling window
         * */
        $(document).on('scroll', documentOnScrollEventHandler);
        var prevScrollPosition = 0;

        function documentOnScrollEventHandler() {
            var fixedMenu = $('.js_fixedMenu'),
                point = $(window).height() - 50,
                currentScrollPosition = $(document).scrollTop();

            if (currentScrollPosition < point && prevScrollPosition > currentScrollPosition) {
                fixedMenu.removeClass('fixed-menu--show');
            } else if(currentScrollPosition > point) {
                fixedMenu.not('.fixed-menu--show').addClass('fixed-menu--show');
            }
            prevScrollPosition = currentScrollPosition;
        }

        documentOnScrollEventHandler();

        /*
         * modal window
         * */
        $('.js_modal').on('click touchend', function(e){
            e.preventDefault();
            var $el = $(e.currentTarget);
            var targetId = $el.data('target');
            var target = $('#' + targetId);
            target.removeClass('hidden');
            $('html').css({
                overflow: 'hidden'
            });
        });

        $('.js_modalWindowBack').on('click', function(e) {
            if ($(e.target).closest('.js_modalWindowContent').length > 0) {
                return;
            }
            var $el = $(e.currentTarget);
            var parent = $el.closest('.js_modalWindow');
            closeModal(parent);
            e.stopPropagation();
        });

        $('.js_close-modal-window').on('click touchend', function(e) {
            var parent = $(e.currentTarget).closest('.js_modalWindow');
            closeModal(parent);
            e.stopPropagation();
        });

        function closeModal(modal){
            modal.not('.hidden').addClass('hidden');
            modal.find('.js_modalWindowBack').removeAttr('style');
            $('html').removeAttr('style');
        }

        // 11. Scroll down init
        function bindEventHandlers() {
            $(document).on("scroll", eventTopButton);
        }

        function eventTopButton() {
            var upBtn = $(".up__btn");

            ($(document).scrollTop() > 500) ? upBtn.not(".visible").addClass("visible") : upBtn.removeClass("visible");
        }

        bindEventHandlers();
    });
})(jQuery);