


$("body").addClass("disable-scroll");


function amplopDigital(){
    Swal.fire('Transfer langsung ke rekening di bawah ini BCA1232141212 <br> a/n Lumine')
}; 



function myFunction(){
    $("body").removeClass("disable-scroll")
    setTimeout(function() 
        {Swal.fire({
            title: '<img src="/assets/img/face-mask.png" alt="">',
            icon: 'info',
            html:
              'Selalu  <b>Gunakan</b>, ' +
              '<a href="https://www.djkn.kemenkeu.go.id/kanwil-jateng/baca-artikel/13981/Protokol-Kesehatan-5M-dan-Kesehatan-Imun-untuk-Hadapi-Varian-Baru-Covid-19.html/">Protokol Kesehatan</a> ' +
              '<br> Dan Menjaga Jarak',
            focusConfirm: false,
            confirmButtonText:
              'Baik, Saya Mengerti! <i class="fa fa-thumbs-up"></i> ',
            confirmButtonAriaLabel: 'Thumbs up, great!',
          }) }, 3200);


};   
/**
 * ITEManimate object is used to animate ease with bezier functions
 * example: TweenMax.to($('selector'), 1.5, {left:"80%", ease: ITEManimate.bezier(0.04,0.86,0.8,1)});
 *
 * copyright -xanaqwert

 */
   var ITEManimate = ({
    start: 0,
    bezier: function(p0, p1, p2, p3) {
        return ITEManimate.polyBez([p0, p1], [p2, p3]);

    },
    polyBez: function(p1, p2) {
        var A = [null, null],
            B = [null, null],
            C = [null, null],
            bezCoOrd = function(t, ax) {
                C[ax] = 3 * p1[ax], B[ax] = 3 * (p2[ax] - p1[ax]) - C[ax], A[ax] = 1 - C[ax] - B[ax];
                return t * (C[ax] + t * (B[ax] + t * A[ax]));
            },
            xDeriv = function(t) {
                return C[0] + t * (2 * B[0] + 3 * A[0] * t);
            },
            xForT = function(t) {
                var x = t,
                    i = 0,
                    z;
                while (++i < 14) {
                    z = bezCoOrd(x, 0) - t;
                    if (Math.abs(z) < 1e-3) break;
                    x -= z / xDeriv(x);
                }
                return x;
            };
        return function(t) {
            return bezCoOrd(xForT(t), 1);
        }
    }
});


//CUSTOM JS CODE
(function($) {
    'use strict';

    //VIEWPORT
    var w = $(window);

    //ANIMATION
    var animationTrigger = $('.trigger');
    var sceneContainer = $('.slide-wrapper');
    var smallCircles = $('.small-circle');
    var portfolioContainer = $('.portfolio-wrapper');

    var main = {

        init: function() {
            var self = this;
            //GSAP ANIMATE
            main.animate();
        },

        //GSAP ANIMATION
        animate: function() {

            //OPEN
            function openAnimation() {
                TweenMax.to(sceneContainer, 0.8, {
                    height: "100%",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                    top: "0%",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                    width: "100%",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                    left: "0%",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),

                    onComplete: function() {
                      console.log(sceneContainer);
                        TweenMax.to(portfolioContainer, 1.8, {
                            width: "100%",
                            ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                            top: "0%",
                            ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815)
                        })
                        TweenMax.to(sceneContainer, 0.8, {
                            top: "-155%",
                            ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                        })
                    }
                });

                TweenMax.to(smallCircles, 0.4, {
                    scale: "0",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),

                });

            }

            //CLOSE
            function closeAnimation() {
                TweenMax.to(portfolioContainer, 1.2, {
                    top: "100%",
                    ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                    width: "100%",
                    ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),

                    onComplete: function() {
                        TweenMax.to(sceneContainer, 0.8, {
                            height: "90%",
                            ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                            top: "5%",
                            ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                            width: "90%",
                            ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                            left: "5%",
                            ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                            onComplete: function() {
                                TweenMax.to(smallCircles, 0.4, {
                                    scale: "1",
                                    ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),

                                });

                            }

                        });
                    }

                })

            }

            animationTrigger.click(function() {
                if ($(this).attr('data-toggle') == 'closed') {
                    $(this).attr('data-toggle', 'opened');
                    openAnimation();
                } else if ($(this).attr('data-toggle', 'opened')) {
                    $(this).attr('data-toggle', 'closed');
                    closeAnimation();
                }
            });
        }
    };

    $(window).resize(function() {});
    return main.init();
}($));


(function($) {
    'use strict';

    //VIEWPORT
    var w = $(window);

    //ANIMATION
    var animationTrigger = $('.trigger');
    var sceneContainer = $('.slide-wrapper');
    var smallCircles = $('.small-circle');
    var portfolioContainer = $('.portfolio-wrapper');

    var main = {

        init: function() {
            var self = this;
            //GSAP ANIMATE
            main.animate();
        },

        //GSAP ANIMATION
        animate: function() {

            //OPEN
            function openAnimation() {
                TweenMax.to(sceneContainer, 0.8, {
                    height: "100%",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                    top: "0%",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                    width: "100%",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                    left: "0%",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),

                    onComplete: function() {
                      console.log(sceneContainer);
                        TweenMax.to(portfolioContainer, 1.8, {
                            width: "100%",
                            ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                            top: "30%",
                            ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815)
                        })
                        TweenMax.to(sceneContainer, 0.8, {
                            top: "-70%",
                            ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),
                        })
                    }
                });

                TweenMax.to(smallCircles, 0.4, {
                    scale: "0",
                    ease: ITEManimate.bezier(0.930, 0.035, 0.350, 0.815),

                });

            }

            //CLOSE
            function closeAnimation() {
                TweenMax.to(portfolioContainer, 1.2, {
                    top: "100%",
                    ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                    width: "100%",
                    ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),

                    onComplete: function() {
                        TweenMax.to(sceneContainer, 0.8, {
                            height: "90%",
                            ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                            top: "5%",
                            ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                            width: "90%",
                            ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                            left: "5%",
                            ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),
                            onComplete: function() {
                                TweenMax.to(smallCircles, 0.4, {
                                    scale: "1",
                                    ease: ITEManimate.bezier(0.815, 0.035, 0.350, 0.930),

                                });

                            }

                        });
                    }

                })

            }

            animationTrigger.click(function() {
                if ($(this).attr('data-toggle') == 'closed') {
                    $(this).attr('data-toggle', 'opened');
                    openAnimation();
                } else if ($(this).attr('data-toggle', 'opened')) {
                    $(this).attr('data-toggle', 'closed');
                    closeAnimation();
                }
            });
        }
    };

    $(window).resize(function() {});
    return main.init();
}($));




/**
 * @author Sahl Harits <sahlrangers@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('clic', function(){
    document.getElementById("my_audio").play();
    console.log('xanaqwert');
});

var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
	TimerCount = new Date("Nov 29, 2022 00:00:00").getTime(),
	template = _.template( jQuery('#main-example-template').html()),
	currDate = '00:00:00:00:00',
	nextDate = '00:00:00:00:00',
	parser = /([0-9]{2})/gi,
	$example = jQuery('#main-example');

	if( $example.data("timer").length ){
		TimerCount = $example.data("timer");	
	}

// Parse countdown string to an object
function strfobj(str) {
	var parsed = str.match(parser),
		obj = {};
	labels.forEach(function(label, i) {
		obj[label] = parsed[i]
	});
	return obj;
}
// Return the time components that diffs
function diff(obj1, obj2) {
	var diff = [];
	labels.forEach(function(key) {
		if (obj1[key] !== obj2[key]) {
			diff.push(key);
		}
	});
	return diff;
}
// Build the layout
var initData = strfobj(currDate);
labels.forEach(function(label, i) {
	$example.append(template({
		curr: initData[label],
		next: initData[label],
		label: label
	}));
});
// Starts the countdown
$example.countdown(TimerCount, function(event) {
	var newDate = event.strftime('%w:%d:%H:%M:%S'),
		data;

	if (newDate !== nextDate) {
		currDate = nextDate;
		nextDate = newDate;
		// Setup the data
		data = {
			'curr': strfobj(currDate),
			'next': strfobj(nextDate)
		};
		// Apply the new values to each node that changed
		diff(data.curr, data.next).forEach(function(label) {
			var selector = '.%s'.replace(/%s/, label),
				$node = $example.find(selector);
			// Update the node
			$node.removeClass('flip');
			$node.find('.curr').text(data.curr[label]);
			$node.find('.next').text(data.next[label]);
			// Wait for a repaint to then flip
			_.delay(function($node) {
				$node.addClass('flip');
			}, 50, $node);
		});
	}
});
  