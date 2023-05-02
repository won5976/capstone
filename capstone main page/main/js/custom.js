$(function(){
  /* TypeIt - Welocme */
  $('#typing').typeIt({
   // 타이핑 텍스트 입력
   strings: ["아두이노를 이용한 경고.", "경고 후 졸음쉼터 안내.", "목표의식 설정."],
    // 처음에 시작할 떄 쓱 나왔다가 다시 다른 문장으로 바뀌는 그 함수이다.
    //
    //
    //



    speed: 100, // 알파벳 타이핑 속도
    autoStart: true, // 자동 재생 사용
    breakLines: false, // 줄 바꿈 사용안함
  });
  
  
  /* Slick Slider - Welocme */
  $('.slideshow').slick({
    infinite: true, // 무한반복
    dots: false,
    arrows: false, // 동그라미 네비게이션 사용안함
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 시 머무는 시간
    fade: true, // 크로스 페이드 트랜지션
    speed: 1000, // 자동 재생 트랜지션 시간
    pauseOnHover: false // 마우스 오버될 때 멈춤 사용안함
  });

  /* Slick Slider - Review */
  $('.review-slider').slick({
    infinite: true, // 무한반복
    dots: true,
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 시 머무는 시간

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  })

  /* Slick Slider - Mockup */
  $('.mockup-slider').slick({
    infinite: true, // 무한반복
    dots: true,
    arrows: false,
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000 // 자동 재생 시 머무는 시간
  })

  /* Wow Scroll Reveal Animation */ 
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true,
    live: true  
  })
  wow.init()
});


$(function(){



  // Scroll Change

  $(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
      $('header, .btn-top').addClass('active')
    } else {
      $('header, .btn-top').removeClass('active')
    }
  })

  // FAQ Accordion

  $('.faq-desc').eq(0).show() //페이지가 로드되었을때 제일 첫번째 요소는 보이는 상태로 둠 
  $('.faq-title').click(function(){
    $(this).next().stop().slideDown() // 클릭된 요소의 다음 요소가 Down되도록 함
    $(this).parent().siblings().children('.faq-desc').stop().slideUp()
    // 클릭된 요소외에 슬라이드 다운된 faq-desc을 슬라이드 업하는 작업 
    // 클릭된 요소의 부모요소 (faq-item) > 형제요소(faq-item) > 자식요소 중 faq-desc를 골라 Up
    $(this).parent().addClass('active')
    $(this).parent().siblings().removeClass('active')
  })



  // VIDEO Modal

  $('.open-modal').click(function(){
    $('.video-modal').fadeIn()
    $('body').addClass('active')
  })
  $('.close-modal').click(function(){
    $('.video-modal').fadeOut()
    $('body').removeClass('active')
  })


  // Scroll Trigger 

  $(window).scroll(function(){

   //ltr
    leftToRight('.ceo-content','.ceo-left');
    leftToRight('.access-content','.access-left');
    leftToRight('.feature-content','.left');
    leftToRight('.feature-content','.left2');
    leftToRight('.feature-content','.left3');
    leftToRight('.faq-content','.faq-accordion');
    leftToRight('.guide-content','.guide-slider');
    leftToRight('.news-content','.news-left');


   //rtl 
    rightToLeft('.ceo-content','.ceo-right');
    rightToLeft('.access-content', '.access-right');
    rightToLeft('.feature-content', '.right');
    rightToLeft('.feature-content', '.right2');
    rightToLeft('.feature-content', '.right3');
    rightToLeft('.faq-content','.awards-content');
    rightToLeft('.guide-content','.guide-video');
    rightToLeft('.news-content','.news-right');

    //utd
    upToDown('.focus-item');
  })

  function leftToRight(a,b) {
    if ($(window).scrollTop() + $(window).height() > $(a).offset().top + 100 ) {
      $(a).find(b).addClass('ltr');
    } else {
      $(a).find(b).removeClass('ltr');
    }
  }

  function rightToLeft(c,d) {
    if ($(window).scrollTop() + $(window).height() > $(c).offset().top + 100) {
      $(c).find(d).addClass('rtl');
    } else {
      $(c).find(d).removeClass('rtl');
    }
  }

  function upToDown(e) {
    if ($(window).scrollTop() + $(window).height() > $(e).offset().top + 100) {
      $(e).addClass('utd');
    } else {
      $(e).removeClass('utd');
    }
  }

  /* header trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')
  })
})
