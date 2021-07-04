$(function() {
    $('.menu-trigger').on('click', function() {
      $(this).toggleClass('active');
      return false;
    });
  });   


  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });

  // portforilのfilter
function portfoliofilter() {
  $('.pill-button').click(function () {
    var value = $(this).attr('data-filter');

    if (value == "*") {
      $('.portfolio-item').show('1000');
      
    } else {
      $('.portfolio-item').not(value).hide('3000');
      $('.portfolio-item').filter(value).show('3000');
    }

    // activeの切替え
    $('.pill-button').removeClass('active');
    $(this).addClass('active');

  });
 
}

$(document).ready(function () {
  "use strict";

  // navColorIn();
  portfoliofilter();
  // portfolioPopup();
  // titleIn();
  
});

function portfolioPopup() {
  if (('.portfolio-items').length > 0) {
      $('.portfolio-items').each(function() {
          $(this).magnificPopup({
              delegate: '.js-zoom-gallery',
              type: 'image',
              gallery: {
                  enabled:true
              }
          });
      });
  }
}