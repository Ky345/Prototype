window.addEventListener('load', function(){
    $('body').addClass('loaded');
    hello();
});

var html = new RadialProgressChart('#html', {
  diameter: 200,
  max: 100,
  round: false,
  shadow: {
  	width: 0
  },
  animation: {
        duration: 0
  },
  series: [{
    value: 95,
    color: ['#7F00BA', '#7F00BA']
  }],
  center: function(d) {
    return 'HTML';
  }
});

var css = new RadialProgressChart('#css', {
  diameter: 200,
  max: 100,
  round: false,
  shadow: {
  	width: 0
  },
  animation: {
        duration: 0
  },
  series: [{
    value: 90,
    color: ['#7F00BA', '#7F00BA']
  }],
  center: function(d) {
    return 'CSS';
  }
});
var js = new RadialProgressChart('#js', {
  diameter: 200,
  max: 100,
  round: false,
  shadow: {
  	width: 0
  },
  animation: {
        duration: 0
  },
  series: [{
    value: 80,
    color: ['#7F00BA', '#7F00BA']
  }],
  center: function(d) {
    return 'JS';
  }
});
var wp = new RadialProgressChart('#wp', {
  diameter: 200,
  max: 100,
  round: false,
  shadow: {
  	width: 0
  },
  animation: {
        duration: 2500
  },
  series: [{
    value: 85,
    color: ['#7F00BA', '#7F00BA']
  }],
  center: function(d) {
    return 'WordPress';
  }
});
var php = new RadialProgressChart('#php', {
  diameter: 200,
  max: 100,
  round: false,
  shadow: {
  	width: 0
  },
  animation: {
        duration: 2500
  },
  series: [{
    value: 70,
    color: ['#7F00BA', '#7F00BA']
  }],
  center: function(d) {
    return 'PHP';
  }
});

/* fullPage.js */
$('#fullpage').fullpage({
  //Navigation
  menu: '#menu',
  lockAnchors: false,
  anchors:['firstPage','skills','experience','about'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['firstSlide', 'secondSlide'],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: false,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor : ['#7F00BA', '#efefef','#efefef','#7F00BA'],
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 1100,
  responsiveHeight: 0,

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //events
  onLeave: function(index, nextIndex, direction){
    
    if(nextIndex == 2) {
    	html.update(1);
	    html.update(95);
	    css.update(1);
	    css.update(90);
	    js.update(1);
	    js.update(75);
	    wp.update(1);
	    wp.update(80);
	    php.update(1);
	    php.update(70);
    }
 
    if($(window).width() > 1100) {
      if(nextIndex == 1 || nextIndex == 4) {
        $('.navbar ul li a').animate({
          color: 'white'
        },600);
        $('#fp-nav span').animate({
          backgroundColor: 'white'
        },350);

      }
      else {
        $('.navbar ul li a').animate({
          color: 'black'
        },600);
        $('#fp-nav span').animate({
          backgroundColor: '#333'
        },350);
      }
      
      if(nextIndex == 2 && index < nextIndex) {
      	$('.skills').removeClass('fadeOut animated').addClass('slideInUp animated');
      }
      if(nextIndex == 2 && index > nextIndex) {
        $('.skills').removeClass('fadeOut animated').addClass('slideInDown animated');
      }
      if(nextIndex != 2) {
      	$('.skills').removeClass('slideInUp slideInDown animated').addClass('fadeOut animated');
      }
      if(nextIndex == 3 && index < nextIndex) {
      	$('#education').removeClass('fadeOut animated').addClass('slideInUp animated');
      	$('#history').removeClass('fadeOut animated').addClass('slideInUp animated');
        $('#bio').removeClass('fadeOut animated').addClass('slideInUp animated');
      }
      if(nextIndex == 3 && index > nextIndex) {
        $('#education').removeClass('fadeOut animated').addClass('slideInDown animated');
        $('#history').removeClass('fadeOut animated').addClass('slideInDown animated');
        $('#bio').removeClass('fadeOut animated').addClass('slideInDown animated');
      }
      if(nextIndex != 3) {
      	$('#education').removeClass('slideInUp slideInDown animated').addClass('fadeOut animated');
      	$('#history').removeClass('slideInUp slideInDown animated').addClass('fadeOut animated');
        $('#bio').removeClass('slideInUp slideInDown animated').addClass('fadeOut animated');
      }
      if(nextIndex == 4 && index < nextIndex) {
        $('#contact').removeClass('fadeOut animated').addClass('slideInUp animated');
        $('#get-in-touch').removeClass('fadeOut animated').addClass('slideInUp animated');

      }
      if(nextIndex != 4) {
        $('#contact').removeClass('slideInUp animated').addClass('fadeOut animated');
        $('#get-in-touch').removeClass('slideInUp animated').addClass('fadeOut animated');
      }

    if(nextIndex == 1){
      $('#homepage').addClass('underlined');
      $('#skillspage').removeClass('underlined');
      $('#experiencepage').removeClass('underlined');
      $('#aboutpage').removeClass('underlined');
    }
    if(nextIndex == 2){
      $('#homepage').removeClass('underlined');
      $('#skillspage').addClass('underlined');
      $('#experiencepage').removeClass('underlined');
      $('#aboutpage').removeClass('underlined');
    }
    if(nextIndex == 3){
      $('#homepage').removeClass('underlined');
      $('#skillspage').removeClass('underlined');
      $('#experiencepage').addClass('underlined');
      $('#aboutpage').removeClass('underlined');
    }
    if(nextIndex == 4){
      $('#homepage').removeClass('underlined');
      $('#skillspage').removeClass('underlined');
      $('#experiencepage').removeClass('underlined');
      $('#aboutpage').addClass('underlined');
    }
  }
  },
  afterLoad: function(anchorLink, index){
    if($(window).width() < 1100) {
      $('.not-first').addClass('fp-auto-height');
    }
    if($(window).width() > 1100) {
      if(index == 1){
        $('#homepage').addClass('underlined');
        $('#skillspage').removeClass('underlined');
        $('#experiencepage').removeClass('underlined');
        $('#aboutpage').removeClass('underlined');
      }
      if(index == 2){
        $('#homepage').removeClass('underlined');
        $('#skillspage').addClass('underlined');
        $('#experiencepage').removeClass('underlined');
        $('#aboutpage').removeClass('underlined');
      }
      if(index == 3){
        $('#homepage').removeClass('underlined');
        $('#skillspage').removeClass('underlined');
        $('#experiencepage').addClass('underlined');
        $('#aboutpage').removeClass('underlined');
      }
      if(index == 4){
        $('#homepage').removeClass('underlined');
        $('#skillspage').removeClass('underlined');
        $('#experiencepage').removeClass('underlined');
        $('#aboutpage').addClass('underlined');
      }
    }
  },
  afterRender: function(){},
  afterResize: function(){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
    
  }
});
/* End fullPage.js */

function hello() {
  $('#hello').delay(500).animate({
    top: '2vh'
  },350,'swing').animate({
    top: '-1vh'
  },150,'swing').animate({
    top: '0vh'
  },100,'swing');

  $('#period').delay(1100).animate({
    top: '2vh'
  },200,'swing').animate({
    top: '-1vh'
  },150,'swing').animate({
    top: '0vh'
  },100,'swing');

  $('#myName').delay(1700).animate({
    right: '2vw'
  },350,'swing').animate({
    right: '-1vw'
  },150, 'swing').animate({
    right: '0vw'
  },100,'swing');

  $('#scroll').delay(3100).animate({
    opacity: '1'
  },350);
  html.update(1);
  html.update(95);
  css.update(1);
  css.update(90);
  js.update(1);
  js.update(75);
  wp.update(1);
  wp.update(80);
  php.update(1);
  php.update(70);
}

 // portfolio
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

