$(document).ready(function(){
//ryu animation
	$('.ryu').mouseenter(function () {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '102rem'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '50.2rem');
			});
	})

	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(event) {
		if (event.keyCode=88) {
			$('.ryu-still, .ryu-ready').hide();
			$('.ryu-cool').show();
		}
	}) .keyup(function(event) {
		if (event.keyCode=88) {
			$('.ryu-cool').hide();
			$('ryu-still, .ryu-ready').show();
		}
	});
//hulk ryu animations
	$('.hulk-ryu').mouseenter(function(){
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').show();
	})

	.mouseleave(function(){
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-still').show();
	})

	.mousedown(function() {
		playHadouken();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-throwing').show();
		$('.hulk-hadouken').finish().show().animate(
			{'right': '102rem'},
			500,
			function() {
				$(this).hide();
				$(this).css('right', '40rem');
			});
	})

	.mouseup(function() {
		$('.hulk-ryu-throwing').hide();
		$('.hulk-ryu-ready').show();
	});

	$(document).keydown(function(event) {
		if (event.keyCode=86) {
			$('.hulk-ryu-still, .hulk-ryu-ready').hide();
			$('.hulk-ryu-cool').show();
		}
	}) .keyup(function(event) {
		if (event.keyCode=88) {
			$('.hulk-ryu-cool').hide();
			$('.hulk-ryu-ready').show();
		}
	});
});

function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}