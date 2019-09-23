(function($) {
    "use strict";

    function parallax() {
        var scrollPosition = $(window).scrollTop();
        $('#parallax').css('top', (0 - (scrollPosition * 0.3)) + 'px'); // bg image moves at 30% of scrolling speed
        $('#hero').css('opacity', ((100 - scrollPosition / 2) * 0.01));
    }
    $(document).ready(function() {
    	
    	$.ajaxSetup({ cache: true });
    	  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    	    FB.init({
    	      appId: '{your-app-id}',
    	      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
    	    });     
    	    $('#loginbutton,#feedbutton').removeAttr('disabled');
    	    
    	  });
    	  var postData = {
			  firstName: '', 
			  lastName: '', 
			  email: '', 
			  address: '', 
			  city: '', 
			  state: '', 
			  zipCode: '', 
			  numKids: 0, 
			  comments: '', 
			  questions: '', 
			  postOk: false 
    	  };
    	  $('#submit_btn').on('click', function() {
    		  var inputs = $('.input-lg');
    		  $.each(inputs, function(item) {
    			 item = $(inputs[item]);
    			 item.trigger('blur');
    		  });
    		  update();
    		  if (postData.postOk)
    			  $.ajax({
    				  url: 'temp.php',
    				  type: 'POST',
    				  data: JSON.stringify(postData),
    				  success: function(data) {
    					  alert(data);
    				  },
    				  error: function() {
    					  alert('best... ya gotta be the best');
    				  }
    			  });
    	  });
    	  
    	  
    	  /*
    		$.ajax({
    			url: 'servlets/NewMember',
    			type: 'GET',
    			success: function(data) {alert(data); },
    			error: function() { alert('error occured'); }
    		});
    	 */
    		var input = $('.input-lg');
    		var nums = 0;

    		function update() {
    			var list = $('<ul class=\"errors\"></ul>');
    			
    			postData.postOk = true;
    			$.each(input, function(item) {
    				var num = item;
    				item = $(input[item]);
    				console.log('num: ' + num + ', prompt: ' + item.data('prompt'));
    				if ((item.data('prompt') !== '') && (item.data('prompt') !== undefined)) {
    					if (num < 8) {
	    					list.append($('<li>' + item.data('prompt') + '</li>'));
	    					postData.postOk = false;
    					}
    				}
    			});
    			$('.error_list').html(list);
    		};
    		$.each(input, function(item) {
    			var num= item;
    			item = $(input[item]);
    			var type = item.data('type');
    			var normal = {
    				'background-color': '#ecf0f1'
    			};
    			var error = {
    				'background-color': '#fcf0f1'
    			};
    			
    			switch (type) {
    				case 'name':				
    					item.on('blur', function(e) {
    						var cssMod, prompt = '';
    						var value = item.val();					
    						var pattern = /^[A-Za-z'-]+$/;
    						if (value && pattern.test(value)) {
    							cssMod = normal;
    							postData[(num === 0) ? 'firstName' : 'lastName'] = value;
    						} else {
    							cssMod = error;
    							prompt = item.attr('placeholder') + (value ? ' contains invalid character' : ' is required');
    						}
    						item.data('prompt', prompt);
    						item.css(cssMod);
    						update();
    					});
    					break;
    				case 'email':
    					item.on('blur', function(e) {
    						var cssMod, prompt = '', value = $.trim(item.val());					
    						//Find @domain
    						var fields = value.split('@');									
    						var pattern = /^[A-Za-z-]+$/;
    						if (value === '') {
    							cssMod = error;
    							prompt = item.attr('placeholder') + ' is required';
    						} else if (fields.length !== 2) {
    							cssMod = error;
    							prompt = item.attr('placeholder') + ' format invalid. Must be name@provider.com';
    							console.log(fields.length);
    						} else {
    							var com = fields[1].split('.');
    							if (com[1] !== 'com') {
    								cssMod = error;
    								prompt = item.attr('placeholder') + ' format invalid. Must be name@provider.com';
    								console.log(fields[0] + ' ' + fields[1]);
    							} else {
    								var name = com[0].split(/[.-]/);
    								var alphas = /^[a-zA-Z]+$/;
    								var invalid = false;
    								for (var x = 0; x < name.length; x++) {
    									if (!alphas.test(name[x])) {
    										invalid = true;
    										break;
    									}
    								}
    								if (invalid) {
    									cssMod = error;
    									prompt = item.attr('placeholder') + ' contains invalid characters';
    								} else {
    									cssMod = normal;
    									postData.email = value;
    								}
    							}
    						} 
    						item.css(cssMod);
    						item.data('prompt', prompt);
    						update();
    					});
    					break;
    				case 'number':
    					item.on('blur', function(e) {
    						var cssMod, value = item.val(), prompt ='';
    						var pattern = /^[0-9]+$/;
    						var prompt = value ? '' : item.attr('placeholder') + ' is required';
    						if (prompt === '') {
    							cssMod = normal;
    							postData.numKids = value;
    						} else {
    							cssMod = error;						
    						}
    						item.css(cssMod);
    						item.data('prompt', prompt);
    						update();
    					});
    					break;
    				case 'address':
    					item.on('blur', function(e) {
    						var cssMod = normal, value = item.val(), prompt = '', pattern = /[{}[]<>\/\?~|\"':;\`!@$%^&*()_+=]/;					
    						if (value !== '') {
    							//test for special chars
    							if (!pattern.test(value)) {							
    								value.replace(/[.#-,]/g, ' ');
    								var fields = value.split(' ');
    								//Test that the address begins with a number
    								pattern = /^([0-9]+$)/;						
    								if (!pattern.test(fields[0])) {
    									cssMod = error;
    									prompt = 'The address needs a number';
    								} else {
    									if ((fields[1] === undefined) || (fields[1] === '')) {
    										cssMod = error;
    										prompt = 'The address needs an identifier';
    									} else {
    										if ((fields[2] === undefined) || (fields[2] === '')) {
    											cssMod = error;
    											prompt = 'The address needs a street suffix';
    										} else {
    											postData.address = value;
    										}
    									}
    								}
    							} else {
    								cssMod = error;
    								prompt = 'The address you entered contains invalid characters';
    							}
    						} else {
    							cssMod = error;
    							prompt = 'Address is required';
    						}
    						item.css(cssMod);
    						item.data('prompt', prompt);
    						update();
    					});
    					break;
    				case 'city':
    					item.on('blur', function(e) {
    						var cssMod = normal, value = item.val(), prompt = '', pattern = /^[a-zA-Z]$/;
    						if ((value === '') || (value === undefined)) {
    							cssMod = error;
    							prompt = 'City is required';
    						} else {
    							postData.city = value;
    						}
    						item.css(cssMod);
    						item.data('prompt', prompt);
    						update();
    					});
    					break;
    				case 'state':
    					item.on('blur', function(e) {
    						var cssMod = normal, value = $.trim(item.val().toUpperCase()), prompt = '', pattern = /^[a-zA-Z]{2}$/,
    						states = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","MD","MA","MI","MN","MS","MO","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
    						if ((value === undefined) || (value === '')) {
    							cssMod = error;
    							prompt = 'State is required';
    						} else {
    							var valid = false;
    							for (var x = 0; x < states.length; x++) {
    								if (value === states[x]) {
    									valid = true; 
    									break;
    								}
    							}
    							if (!valid) {
    								cssMod = error;
    								prompt = 'The state entered was not valid';
    							} else {
    								postData.state = value;
    							}
    						}				
    						item.css(cssMod);
    						item.data('prompt', prompt);
    						update();
    					});
    					break;
    				case 'zip-code':
    					console.log(type);
    					item.on('blur', function(e) {
    						var cssMod = normal, value = item.val(), prompt = '', pattern = /^[0-9]{5}$/;
    						if ((value === undefined) || (value === '')) {
    							cssMod = error;
    							prompt = 'Zip code is required';
    						} else {
    							if (!pattern.test(value)) {
    								cssMod = error;
    								prompt = 'Zip code must be 5 numbers'
    							} else {
    								postData.zipCode = value;
    							}
    						}
    						item.css(cssMod);
    						item.data('prompt', prompt);
    						update();
    					});
    					break;
    				case 'comments':
    					item.on('blur', function() {
    						postData.comments = item.val();
    					});		
    					item.data('prompt', '');
    					break;
    				case 'questions':
    					item.on('blur', function() {
    						postData.questions = item.val();
    					});
    					item.data('prompt', '');
    				default:
    					//alert('this shouldn\"t happen');
    					break;
    			}
    			/*
    			(function(d, s, id) {
    				  var js, fjs = d.getElementsByTagName(s)[0];
    				  if (d.getElementById(id)) return;
    				  js = d.createElement(s); js.id = id;
    				  js.src = "assets/js/sdk.js#xfbml=1&version=v2.6";
    				  fjs.parentNode.insertBefore(js, fjs);
    				}(document, 'script', 'facebook-jssdk'));
    			*/
    		});
	  
        /*	Parallax Background
	================================================== */

        $(window).on('scroll', function(e) {
            parallax();
        });

        /*	Local Scroll
	================================================== */

        jQuery('.navbar').localScroll({
            offset: -80,
            duration: 500
        });

        /*	Active Menu
	================================================== */

        jQuery(function() {
            var sections = jQuery('section');
            var navigation_links = jQuery('nav a');
            sections.waypoint({
                handler: function(direction) {
                    var active_section;
                    active_section = jQuery(this);
                    if (direction === "up") active_section = active_section.prev();
                    var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
                    navigation_links.parent().removeClass("active");
                    active_link.parent().addClass("active");
                    active_section.addClass("active-section");
                },
                offset: '35%'
            });
        });

        /*	Pretty Photo
	================================================== */

        jQuery('#gallery a').attr('rel', 'prettyPhoto');
        jQuery("a[rel^='prettyPhoto']").prettyPhoto();

        /*	Bootstrap Carousel
	================================================== */

        jQuery('.carousel').carousel()
    });

    jQuery(window).load(function() {

        $('.section').each(function() {
            animate_start($(this));
        });

    });
        /*	Animation with Waypoints
	================================================== */

    var animate_start = function($this) {
        $this.find('.animate').each(function(i) {
            var $item = jQuery(this);
            var animation = $item.data("animate");

            $item.waypoint(function(direction) {
                $item.css({
                    '-webkit-animation-delay': (i * 0.1) + "s",
                    '-moz-animation-delay': (i * 0.1) + "s",
                    '-ms-animation-delay': (i * 0.1) + "s",
                    '-o-animation-delay': (i * 0.1) + "s",
                    'animation-delay': (i * 0.1) + "s"
                });
                $item.removeClass('animate').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    jQuery(this).removeClass(animation + ' animated');
                });
            }, {
                offset: '80%',
                triggerOnce: true
            });
        });
    };    

})(jQuery);
