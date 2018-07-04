"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
    window.addEventListener('DOMContentLoaded', function () {

      var sliderTop = require('../js/modules/sliderTop.js');
      var modalGift = require('../js/modules/modalGift.js');
      var sliderDown = require('../js/modules/sliderDown.js');
      var accords = require('../js/modules/accords.js');
      var showall = require('../js/modules/showall.js');
      var sizeimg = require('../js/modules/sizeimg.js');
      var filter = require('../js/modules/filter.js');
      var culck = require('../js/modules/culck.js');
      var burger = require('../js/modules/burger.js');

      sliderTop();
      modalGift();
      sliderDown();
      accords();
      showall();
      sizeimg();
      filter();
      culck();
      burger();
    });
  }, { "../js/modules/accords.js": 2, "../js/modules/burger.js": 3, "../js/modules/culck.js": 4, "../js/modules/filter.js": 5, "../js/modules/modalGift.js": 6, "../js/modules/showall.js": 7, "../js/modules/sizeimg.js": 8, "../js/modules/sliderDown.js": 9, "../js/modules/sliderTop.js": 10 }], 2: [function (require, module, exports) {
    function accords() {
      var accordsBtn = document.getElementsByClassName('accordion-heading'),
          accordsBlock = document.getElementsByClassName('accordion-block');

      var _loop = function _loop(i) {
        accordsBtn[i].addEventListener('click', function () {

          if (!accordsBtn[i].classList.contains('.active')) {
            for (var _i = 0; _i < accordsBtn.length; _i++) {
              accordsBtn[_i].classList.remove('active');
              accordsBtn[_i].style.color = '#333333';
            };
          }
          accordsBtn[i].classList.add('active');
          accordsBtn[i].style.color = '#CE37C5';
        });
      };

      for (var i = 0; i < accordsBtn.length; i++) {
        _loop(i);
      }
    }
    module.exports = accords;
  }, {}], 3: [function (require, module, exports) {
    function burger() {
      var btnBurg = document.querySelector('.burger'),
          menuBurg = document.querySelector('.burger-menu');
      console.log(menuBurg);
      setInterval(startSize, 10);
      function startSize() {
        if (window.innerWidth < 768) {
          btnBurg.style.display = "block";
        } else {
          btnBurg.style.display = "none";
        };
      }

      btnBurg.addEventListener('click', function () {
        menuBurg.classList.toggle("showBtn");
      });
    }module.exports = burger;
  }, {}], 4: [function (require, module, exports) {
    function culck() {
      var sizePic = document.getElementById('size'),
          materialPic = document.getElementById('material'),
          optionsPic = document.getElementById('options'),
          promocode = document.querySelector('.promocode'),
          calcPrice = document.querySelector('.calc-price');

      var h = 0;
      var r = 0;
      var n = 0;
      var sale = 0;
      var cul = 0;

      function allCulck() {
        var cost = 0;
        if (h == 0 || r == 0) {
          calcPrice.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
          calcPrice.style.fontWeight = '350';
          calcPrice.style.fontSize = '14px';
          cul = 0;
        } else {
          cost = h + r + n;
          calcPrice.innerHTML = cost;
          calcPrice.style.fontWeight = '700';
          calcPrice.style.fontSize = '50px';
          cul = cost;
        }
        if (promocode.value === 'IWANTPOPART') {
          salePrice();
        }

        console.log(cul);
      };

      function salePrice() {
        if (!(cul == 0)) {
          var _cost = h + r + n - (h + r + n) / 100 * 30;
          calcPrice.innerHTML = _cost;
          calcPrice.style.fontWeight = '700';
          calcPrice.style.fontSize = '50px';
        }
      }

      sizePic.addEventListener('change', function () {
        var a = sizePic.options[sizePic.selectedIndex].value;
        if (sizePic.options[sizePic.selectedIndex].classList.contains("none")) {
          a = 0;
        }
        h = +a;
        allCulck();
      });
      materialPic.addEventListener('change', function () {
        var b = materialPic.options[materialPic.selectedIndex].value;
        if (materialPic.options[materialPic.selectedIndex].classList.contains("none")) {
          b = 0;
        }
        r = +b;
        allCulck();
      });
      optionsPic.addEventListener('change', function () {
        var g = optionsPic.options[optionsPic.selectedIndex].value;
        if (optionsPic.options[optionsPic.selectedIndex].classList.contains("none")) {
          g = 0;
        }
        n = +g;
        allCulck();
      });
      promocode.addEventListener('change', function () {
        if (promocode.value === 'IWANTPOPART') {
          salePrice();
        } else {
          cost = h + r + n;
          calcPrice.innerHTML = cost;
          calcPrice.style.fontWeight = '700';
          calcPrice.style.fontSize = '50px';
          cul = cost;
        }
      });
    }module.exports = culck;
  }, {}], 5: [function (require, module, exports) {
    function filter() {

      var getAll = document.querySelectorAll('.portfolio-block'),
          btnAll = document.querySelector('.all'),
          lovers = document.querySelector('.lovers'),
          chef = document.querySelector('.chef'),
          girl = document.querySelector('.girl'),
          guy = document.querySelector('.guy'),
          grandmother = document.querySelector('.grandmother'),
          granddad = document.querySelector('.granddad'),
          portfolioNo = document.querySelector('.portfolio-no'),
          serch = document.querySelectorAll('.serch');

      function serchAll() {
        for (var i = 0; i < serch.length; i++) {
          if (serch[i].classList.contains("active")) {
            serch[i].classList.remove("active");
          }
        }
      }

      function filters(n, b) {
        serchAll();
        n.classList.add('active');
        portfolioNo.style.display = 'none';
        for (var i = 0; i < getAll.length; i++) {
          getAll[i].style.display = "none";
        }
        for (var _i2 = 0; _i2 < getAll.length; _i2++) {
          if (getAll[_i2].classList.contains(b)) {
            getAll[_i2].style.display = "block";
          }
        }
      }

      // портрет для дедушки
      granddad.addEventListener('click', function () {
        for (var i = 0; i < getAll.length; i++) {
          getAll[i].style.display = "none";
        }
        serchAll();
        granddad.classList.add('active');
        portfolioNo.style.display = 'block';
      });
      // портрет для бабушки
      grandmother.addEventListener('click', function () {
        for (var i = 0; i < getAll.length; i++) {
          getAll[i].style.display = "none";
        }
        serchAll();
        grandmother.classList.add('active');
        portfolioNo.style.display = 'block';
      });
      // показываем все элементы на странице
      btnAll.addEventListener('click', function () {
        filters(btnAll, "portfolio-block");
      });

      lovers.addEventListener('click', function () {
        filters(lovers, "lovers");
      });

      chef.addEventListener('click', function () {
        filters(chef, "chef");
      });
      girl.addEventListener('click', function () {
        filters(girl, "girl");
      });
      guy.addEventListener('click', function () {
        filters(guy, "guy");
      });
    }module.exports = filter;
  }, {}], 6: [function (require, module, exports) {
    function modalGift() {
      // Моджальное окно с подарком 
      var modalTop = document.querySelector(".popup-gift"),
          fixedGift = document.querySelector(".fixed-gift"),
          popupClose = document.getElementsByClassName("popup-close");

      fixedGift.addEventListener('click', function () {
        modalTop.style.display = "block";
        modalTop.style.zIndex = "99";
        fixedGift.style.display = "none";
        clearInterval(scrolTime);
      });

      // Назвначаем всем крестикам обработчик событий закрыть
      for (var b = 0; b < popupClose.length; b++) {
        popupClose[b].addEventListener('click', function () {
          modalTop.style.display = "none";
          windowModalDesign.style.display = 'none';
          modalBtnConsultation.style.display = 'none';
        });
      }

      // Модальное окно button-design

      var modalDesign = document.querySelectorAll('.button-design'),
          windowModalDesign = document.querySelector('.popup-design'),
          windowpopup = document.querySelector('.popup-content');

      for (var i = 0; i < modalDesign.length; i++) {
        modalDesign[i].addEventListener('click', function () {
          windowModalDesign.style.display = 'block';
          windowpopup.style.display = 'block';
          windowpopup.style.zIndex = "99";
          windowpopup.style.position = "fixed";
          clearInterval(scrolTime);
        });
      }

      // Модальное окно button-consultation 
      var btnConsultation = document.querySelectorAll('.button-consultation'),
          modalBtnConsultation = document.querySelector('.popup-consultation');

      for (var _i3 = 0; _i3 < btnConsultation.length; _i3++) {
        btnConsultation[_i3].addEventListener('click', function () {
          modalBtnConsultation.style.display = 'block';
          modalBtnConsultation.style.zIndex = "99";
          clearInterval(scrolTime);
        });
      }

      window.addEventListener('click', function (event) {
        if (event.target == windowModalDesign) {
          windowModalDesign.style.display = 'none';
        }
        if (event.target == modalTop) {
          modalTop.style.display = "none";
        }
        if (event.target == modalBtnConsultation) {
          modalBtnConsultation.style.display = 'none';
        }
      });
      var modal60 = setTimeout(modal60sec, 75000);
      function modal60sec() {
        modalBtnConsultation.style.display = 'block';
        modalBtnConsultation.style.zIndex = "95";
        clearTimeout(modal60);
      };

      var scrolTime = setInterval(scrolling, 1000);

      function scrolling() {

        var a = window.pageYOffset;
        if (a > 11500) {
          modalTop.style.display = "block";
          modalTop.style.zIndex = "99";
          fixedGift.style.display = "none";
          clearInterval(scrolTime);
        }
      }
    };

    module.exports = modalGift;
  }, {}], 7: [function (require, module, exports) {
    function showall() {
      var styleBtn = document.querySelector('.button-transparent');
      var elem = document.getElementsByClassName('styles-2');

      styleBtn.addEventListener('click', function () {
        styleBtn.style.display = 'none';
        for (var i = 0; i < elem.length; i++) {
          elem[i].classList.remove("hidden-lg");
          elem[i].classList.remove("hidden-md");
          elem[i].classList.remove("hidden-sm");
          elem[i].classList.remove("hidden-xs");
          elem[i].classList.add("col-sm-3");
          elem[i].classList.add("col-sm-offset-0");
          elem[i].classList.add("col-xs-10");
          elem[i].classList.add("col-xs-offset-1");
        }
      });
    }
    module.exports = showall;
  }, {}], 8: [function (require, module, exports) {
    function sizeimg() {

      var sizeelem = document.querySelectorAll('.sizes-block');

      var sizeWrapper = document.querySelector('.sizes-wrapper');

      //первая картинка 
      sizeelem[0].addEventListener('mouseover', function () {
        sizeelem[0].querySelector('.size-1').setAttribute("src", "../img/sizes-1-1.png");
        sizeelem[0].querySelector('.starting-price').style.display = "none";
        sizeelem[0].querySelector('.size').style.display = "none";
        sizeelem[0].querySelector('.final-price').style.display = "none";
      });

      window.addEventListener('mouseover', function () {
        if (event.target == sizeWrapper) {
          sizeelem[0].querySelector('.size-1').setAttribute("src", "../img/sizes-1.png");
          sizeelem[0].querySelector('.starting-price').style.display = "block";
          sizeelem[0].querySelector('.size').style.display = "block";
          sizeelem[0].querySelector('.final-price').style.display = "block";
        }
      });

      // Вторая картинка
      sizeelem[1].addEventListener('mouseover', function () {
        sizeelem[1].querySelector('.size-2').setAttribute("src", "../img/sizes-2-1.png");
        sizeelem[1].querySelector('.starting-price').style.display = "none";
        sizeelem[1].querySelector('.size').style.display = "none";
        sizeelem[1].querySelector('.final-price').style.display = "none";
      });

      window.addEventListener('mouseover', function () {
        if (event.target == sizeWrapper) {
          sizeelem[1].querySelector('.size-2').setAttribute("src", "../img/sizes-2.png");
          sizeelem[1].querySelector('.starting-price').style.display = "block";
          sizeelem[1].querySelector('.size').style.display = "block";
          sizeelem[1].querySelector('.final-price').style.display = "block";
        }
      });

      sizeelem[2].addEventListener('mouseover', function () {
        sizeelem[2].querySelector('.size-3').setAttribute("src", "../img/sizes-3-1.png");
        sizeelem[2].querySelector('.starting-price').style.display = "none";
        sizeelem[2].querySelector('.size').style.display = "none";
        sizeelem[2].querySelector('.final-price').style.display = "none";
      });

      window.addEventListener('mouseover', function () {
        if (event.target == sizeWrapper) {
          sizeelem[2].querySelector('.size-3').setAttribute("src", "../img/sizes-3.png");
          sizeelem[2].querySelector('.starting-price').style.display = "block";
          sizeelem[2].querySelector('.size').style.display = "block";
          sizeelem[2].querySelector('.final-price').style.display = "block";
        }
      });
      sizeelem[3].addEventListener('mouseover', function () {
        sizeelem[3].querySelector('.size-4').setAttribute("src", "../img/sizes-4-1.png");
        sizeelem[3].querySelector('.starting-price').style.display = "none";
        sizeelem[3].querySelector('.size').style.display = "none";
        sizeelem[3].querySelector('.final-price').style.display = "none";
      });

      window.addEventListener('mouseover', function () {
        if (event.target == sizeWrapper) {
          sizeelem[3].querySelector('.size-4').setAttribute("src", "../img/sizes-4.png");
          sizeelem[3].querySelector('.starting-price').style.display = "block";
          sizeelem[3].querySelector('.size').style.display = "block";
          sizeelem[3].querySelector('.final-price').style.display = "block";
        }
      });
    }
    module.exports = sizeimg;
  }, {}], 9: [function (require, module, exports) {
    function sliderDown() {

      var getSliderDown = document.querySelectorAll('.feedback-slider-item'),
          prevBtn = document.querySelector('.main-prev-btn'),
          nextBtn = document.querySelector('.main-next-btn');
      rigth(-1);
      setInterval(autoSlide, 15000);
      var a = 0;

      function rigth(n) {
        for (var i = 0; i < getSliderDown.length; i++) {
          getSliderDown[i].style.display = 'none';
          getSliderDown[i].style.opacity = '0';
        };
        if (n > getSliderDown.length) {
          n = 1;
        };
        if (n < 1) {
          n = getSliderDown.length;
        };
        var a = 0;
        var d = -25;
        getSliderDown[n - 1].style.marginLeft = d + '%';
        getSliderDown[n - 1].style.display = 'block';
        var animateSlid = setInterval(animateMy, 1);
        function animateMy() {
          if (d == 0) {
            clearInterval(animateSlid);
          } else {
            d = +d + 1;
            a = +a + 0.04;
            getSliderDown[n - 1].style.opacity = a + '';
            getSliderDown[n - 1].style.marginLeft = d + '%';
          }
        }
      }

      function left(n) {
        for (var i = 0; i < getSliderDown.length; i++) {
          getSliderDown[i].style.display = 'none';
          getSliderDown[i].style.opacity = '0';
        };

        var a = 0;
        var d = 25;
        getSliderDown[n - 1].style.marginLeft = d + '%';
        getSliderDown[n - 1].style.display = 'block';
        var animateSlid = setInterval(animateMy, 1);
        function animateMy() {
          if (d == 0) {
            clearInterval(animateSlid);
          } else {
            d = +d - 1;
            a = +a + 0.04;
            getSliderDown[n - 1].style.opacity = a + '';
            getSliderDown[n - 1].style.marginLeft = d + '%';
          }
        }
      }

      function autoSlide() {
        a++;
        var j = a;
        if (j > 2) {
          a = 0;
        }
        rigth(a);
      }

      nextBtn.addEventListener('click', function () {
        a += 1;
        var j = a;
        if (j > 2) {
          a = 0;
        }
        rigth(a);
        console.log(a);
      });

      prevBtn.addEventListener('click', function () {
        a -= 1;
        var j = a;
        if (j < 1) {
          a = 3;
        }
        left(a);
        console.log(a);
      });
    }

    module.exports = sliderDown;
  }, {}], 10: [function (require, module, exports) {
    function sliderTop() {
      var elementSlider = document.querySelectorAll(".main-slider-item-img");
      for (var i = 1; i < elementSlider.length; i++) {
        elementSlider[i].style.display = "none";
        elementSlider[i].style.margineTop = "-80px";
      };
      var id = 0;

      (function animate() {
        var time = setTimeout(function () {
          var pos = -80;
          var opas = 0;
          elementSlider[id].style.display = "none";
          elementSlider[id].style.margineTop = "-80px";
          id = (id + 1) % elementSlider.length;
          myID(id);
          function myID(n) {
            var newa = setInterval(slidsImg, 25);
            function slidsImg() {
              elementSlider[n].style.display = "block";
              if (pos == -64) {
                clearInterval(newa);
              } else {
                pos++;
                opas = +opas + 0.06;
                elementSlider[n].style.marginTop = pos + "px";
                elementSlider[n].style.opacity = opas + "";
              }
            }
          };animate();
        }, 6000);
      })();
    };

    module.exports = sliderTop;
  }, {}] }, {}, [1]);