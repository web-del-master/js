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

      sliderTop();
      modalGift();
      sliderDown();
    });
  }, { "../js/modules/modalGift.js": 2, "../js/modules/sliderDown.js": 3, "../js/modules/sliderTop.js": 4 }], 2: [function (require, module, exports) {
    function modalGift() {
      // Моджальное окно с подарком 
      var modalTop = document.querySelector(".popup-gift"),
          fixedGift = document.querySelector(".fixed-gift"),
          popupClose = document.getElementsByClassName("popup-close");

      fixedGift.addEventListener('click', function () {
        modalTop.style.display = "block";
        modalTop.style.zIndex = "99";
        fixedGift.style.display = "none";
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
          windowModalDesign = document.querySelector('.popup-design');

      for (var i = 0; i < modalDesign.length; i++) {
        modalDesign[i].addEventListener('click', function () {
          windowModalDesign.style.display = 'block';
          windowModalDesign.style.zIndex = "99";
        });
      }

      // Модальное окно button-consultation 
      var btnConsultation = document.querySelectorAll('.button-consultation'),
          modalBtnConsultation = document.querySelector('.popup-consultation');

      for (var _i = 0; _i < btnConsultation.length; _i++) {
        btnConsultation[_i].addEventListener('click', function () {
          modalBtnConsultation.style.display = 'block';
          modalBtnConsultation.style.zIndex = "99";
        });
      }
    };

    module.exports = modalGift;
  }, {}], 3: [function (require, module, exports) {
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
  }, {}], 4: [function (require, module, exports) {
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
