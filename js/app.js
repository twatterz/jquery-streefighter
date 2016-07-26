$(document).ready(function(){

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
				$(this).css('left', '52rem');
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
});

function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}