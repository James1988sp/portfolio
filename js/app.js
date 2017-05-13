const $links = $('nav a');
const $menu = $('#menu');
const $window = $(window);

$links.on('click', scrollToSection);
$menu.on('click', toggleMenu);

function toggleMenu() {
  $('.dropdown').slideToggle();
  $('#menu').toggle();
  $('#navbar').css('background-color','rgba(40,40,40,0.9)' );

}

function scrollToSection() {
  const section = $(this).attr('href'); //'#menus'
  $('body').animate( {
    scrollTop: $(section).offset().top
  }, 1000, () => {
    if($window.width() <575) {
      $('.dropdown').slideToggle();
      $('#menu').slideToggle();
      $('#navbar').css('background-color','rgba(0,0,0,0)' );
    }
  });
}

$('#skill').click(function(){
  $('.graph').hide();
  $('.graph').toggle();
});



// $(document).ready(function () {
//   //Move Next section
//   var $sec = $('section');
//   $('.arrow-down').click(function(){
//     var y = $sec.filter(function(i, el) {
//       return el.getBoundingClientRect().bottom > 100;
//     })[$(this).hasClass('arrow-down')?'next':'']('section').offset().top;
//     $('html, body').stop().animate({scrollTop: y});
//   });
//
//   $('.arrow-up').click(function() {
//     $('html, body').animate({
//       scrollTop: $('html, body').offset().top
//     }, 2000);
//   });
// });
//
//
// // arrow
// $(window).scroll(function(event){
//   var scroll = $(window).scrollTop();
//   if (scroll >= 300 && scroll <2000) {
//     $('.arrow-down').addClass('show').removeClass('hidden');
//     $('.arrow-up').removeClass('hidden').addClass('show');
// }
//   else if (scroll >=2000) {
//     $('.arrow-up').removeClass('hidden').addClass('show');
//     $('.arrow-down').addClass('hidden').removeClass('show');
// }
//   else {
//     $('.arrow-bottom').removeClass('show');
//   }
// });
particlesJS('particles-js',

  {
    'particles': {
      'number': {
        'value': 100,
        'density': {
          'enable': true,
          'value_area': 800
        }
      },
      'color': {
        'value': '#ffffff'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 5
        },
        'image': {
          'src': 'img/github.svg',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.5,
        'random': true,
        'anim': {
          'enable': true,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 5,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 100,
          'size_min': 0.1,
          'sync': false
        }
      },
      'line_linked': {
        'enable': true,
        'distance': 150,
        'color': '#ffffff',
        'opacity': 0.4,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 6,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': true,
          'mode': 'repulse'
        },
        'onclick': {
          'enable': true,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 200
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true,
    'config_demo': {
      'hide_card': false,
      'background_color': 'silvergrey',
      'background_image': '',
      'background_position': '50% 50%',
      'background_repeat': 'no-repeat',
      'background_size': 'cover'
    }
  }
);
