!function(u){u(function(){function e(){var e=u(".excellence__list");(u(window).outerWidth()<1025?e.addClass("excellence__slider"):e.removeClass("excellence__slider"),u(".excellence__slider").length)&&u(".excellence__slider").slick({vertical:!1,dots:!1,infinite:!0,arrows:!1,nextArrow:"",prevArrow:"",slidesToScroll:1,variableWidth:!0,centerMode:!0})}var i,o,s;function n(){var e=u(".price__list");(u(window).outerWidth()<1025?e.addClass("price__slider"):e.removeClass("price__slider"),u(".price__slider").length)&&u(".price__slider").slick({vertical:!1,dots:!0,infinite:!0,arrows:!1,nextArrow:"",prevArrow:"",slidesToScroll:1,variableWidth:!0,centerMode:!0})}function l(){var e=u(".services__list");(u(window).outerWidth()<768?e.addClass("services__slider"):e.removeClass("services__slider"),u(".services__slider").length)&&u(".services__slider").slick({vertical:!1,dots:!0,infinite:!0,arrows:!1,nextArrow:"",prevArrow:"",slidesToScroll:1,variableWidth:!0,centerMode:!0})}function t(){u(document).on("scroll",r)}function r(){var e=u(".up__btn");500<u(document).scrollTop()?e.not(".visible").addClass("visible"):e.removeClass("visible")}(new WOW).init(),u(".js_nav").on("click",function(e){e.preventDefault();var i=u("body");i.hasClass("mobile-menu--open")?i.removeClass("mobile-menu--open"):i.addClass("mobile-menu--open")}),u(".js_select").selectize({create:!1,maxItems:1,valueField:"value",labelField:"title",searchField:["title"]}),e(),u(window).on("resize",function(){e()}),i=u(".slider__news"),o=u(".slider-news__nav--right"),s=u(".slider-news__nav--left"),i.slick({vertical:!1,dots:!0,infinite:!0,arrows:!0,speed:500,cssEase:"linear",nextArrow:"",prevArrow:"",slidesToShow:3,slidesToScroll:1,variableWidth:!1,centerMode:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:425,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}}]}),o.on("click",function(e){e.preventDefault(),i.slick("slickNext")}),s.on("click",function(e){e.preventDefault(),i.slick("slickPrev")}),n(),u(window).on("resize",function(){n()}),l(),u(window).on("resize",function(){l()}),u(".form-submit").on("click",function(){var e=u(this).closest(".form"),i=e.find('input[name="name"]').val(),o=e.find('input[name="phone"]').val(),s=e.find('input[name="email"]').val();return u.ajax({type:"POST",url:"http://35it.ru/mail.php",data:{name:i,phone:o,email:s},success:function(e){"1"===e&&(console.log(e),console.log("Ok!"),u(".success").show())}}),!1}),t(),u(".js-scroll-arrow").on("click.smoothscroll",function(e){e.preventDefault();var i,o=this.hash,s=o.replace(/#/,"");i=""==s?u("body"):u(o+', a[name="'+s+'"]').first();var n=u(this).attr("href").replace(/#.*/,"");!i.length||n&&location.href.replace(/#.*/,"")!=n||u("html, body").stop().animate({scrollTop:i.offset().top},1e3,"swing",function(){window.location.hash=o})}),u(document).on("scroll",a);var c=0;function a(){var e=u(".js_fixedMenu"),i=u(window).height()-50,o=u(document).scrollTop();o<i&&o<c?e.removeClass("fixed-menu--show"):i<o&&e.not(".fixed-menu--show").addClass("fixed-menu--show"),c=o}function d(e){e.not(".hidden").addClass("hidden"),e.find(".js_modalWindowBack").removeAttr("style"),u("html").removeAttr("style")}function t(){u(document).on("scroll",r)}function r(){var e=u(".up__btn");500<u(document).scrollTop()?e.not(".visible").addClass("visible"):e.removeClass("visible")}a(),u(".js_modal").on("click touchend",function(e){e.preventDefault();var i=u(e.currentTarget).data("target");u("#"+i).removeClass("hidden"),u("html").css({overflow:"hidden"})}),u(".js_modalWindowBack").on("click",function(e){0<u(e.target).closest(".js_modalWindowContent").length||(d(u(e.currentTarget).closest(".js_modalWindow")),e.stopPropagation())}),u(".js_close-modal-window").on("click touchend",function(e){d(u(e.currentTarget).closest(".js_modalWindow")),e.stopPropagation()}),t()})}(jQuery);