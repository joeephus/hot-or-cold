


$(document).ready(function(){

	//Defining global variables 
	var count = 0;

	/*---Creating random number---*/
	 var computerChoice = Math.floor(Math.random() * 100 + 1);
	console.log(computerChoice);
	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(500);
  	});


  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});

  	/*---preventing enter key ----*/
	$(document).on('click', 'form input[type=submit]', function(event){
		event.preventDefault();
		console.log('you clicked a button');
	});

  	/*---Getting user input ---*/
  	$('.button').on('click', function() {
  		var user_guess = $('#userGuess').val();
  		var distance = Math.abs(computerChoice - user_guess);
  		//appending user guess
		$('.guessBox').append('<li>' + user_guess + '</li>');

		//Comparitive function
			if ( distance >= 50 ) {
				$('h2').text("So far, o so far");
				guessed = false;
			}
			else if ( distance >= 30) {
				$('h2').text("Not far, But not close");
				guessed = false;
			}
			else if ( distance >= 20) {
				$('h2').text("you're getting there")
				guessed = false;
			}
			else if ( distance >= 10) {
				$('h2').text("It's getting hot in hur")
				guessed = false;
			}
			else if ( distance >= 5) {
				$('h2').text("You're on fire!")
				guessed = false;
			}
			else if ( distance === 0) {
				$('h2').text("That's it, Congratulations!")
				var guessed = true;
			}
			else if ( guessed === true ) {
				$('#guessButton').hide()	
			}
			else {
				$('h2').text("Um, what is that?")
			}

		/*---adding to the counter after button press---*/
		console.log("User input recieved");
		count++
		$('#count').text(count);

		//blank user input after enter
		$('#userGuess').val('');	
	});

	
});


