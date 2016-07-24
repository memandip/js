var opt = ['O','X'];
var s;
var count = 0;
var winner;

function choose(value){
	s = value;
	$('#msg').html('You chose '+s);
	$('#choose').hide();
}

$(document).ready(function(){

	var spot11 = $("#11");
	var spot12 = $("#12");
	var spot13 = $("#13");
	var spot21 = $("#21");
	var spot22 = $("#22");
	var spot23 = $("#23");
	var spot31 = $("#31");
	var spot32 = $("#32");
	var spot33 = $("#33");

	$('td').on('click',function(){

		var p = (s=='O')?'X':'O';

		if(typeof s == 'undefined'){
			$('#err').html('Please select O or X');
			return;
		}
		else{
			$('#err').html('');
		}

		if(typeof winner != 'undefined'){
			$('#msg').html(winner+ ' wins.');
			return;
		}

		if($(this).hasClass('O') || $(this).hasClass('X') && $('#msg').hasClass('')){
			$('#err').html('You cannot choose twice.');
			return;
		}
		else if($('#msg').hasClass('o')){
			$('#err').html('O wins.');
			return;
		}
		else if($('#msg').hasClass('x')){
			$('#err').html('X wins');
			return;
		}
		else{

			if(count%2==0){
				$(this).addClass('checked '+s);
			}
			else{
				$(this).addClass('checked '+p);
			}
			
			count++;
		}

		if(typeof winner == 'undefined'
			&& (spot11.hasClass('X') || spot11.hasClass('O'))
			&& (spot12.hasClass('X') || spot12.hasClass('O'))
			&& (spot13.hasClass('X') || spot13.hasClass('O'))
			&& (spot21.hasClass('X') || spot21.hasClass('O'))
			&& (spot22.hasClass('X') || spot22.hasClass('O'))
			&& (spot23.hasClass('X') || spot23.hasClass('O'))
			&& (spot31.hasClass('X') || spot31.hasClass('O'))
			&& (spot32.hasClass('X') || spot32.hasClass('O'))
			&& (spot33.hasClass('X') || spot33.hasClass('O'))
			){
				$('#msg').html('All fields are filled. Nobody wins. Please reload.');
				return;
		}


		if(spot11.hasClass('O') && spot12.hasClass('O') && spot13.hasClass('O')
			|| spot21.hasClass('O') && spot22.hasClass('O') && spot23.hasClass('O') 
			|| spot31.hasClass('O') && spot32.hasClass('O') && spot33.hasClass('O')
			|| spot11.hasClass('O') && spot22.hasClass('O') && spot33.hasClass('O')
			|| spot13.hasClass('O') && spot22.hasClass('O') && spot31.hasClass('O')
			|| spot11.hasClass('O') && spot21.hasClass('O') && spot31.hasClass('O')
			|| spot12.hasClass('O') && spot22.hasClass('O') && spot32.hasClass('O')
			|| spot13.hasClass('O') && spot23.hasClass('O') && spot33.hasClass('O')
			){

			alert('O wins');
			$("#msg").addClass('o').html('O wins.');
			winner = 'O';
		}
		else if(spot11.hasClass('X') && spot12.hasClass('X') && spot13.hasClass('X')
				|| spot21.hasClass('X') && spot22.hasClass('X') && spot23.hasClass('X') 
				|| spot31.hasClass('X') && spot32.hasClass('X') && spot33.hasClass('X')
				|| spot11.hasClass('X') && spot22.hasClass('X') && spot33.hasClass('X')
				|| spot13.hasClass('X') && spot22.hasClass('X') && spot31.hasClass('X')
				|| spot11.hasClass('X') && spot21.hasClass('X') && spot31.hasClass('X')
				|| spot12.hasClass('X') && spot22.hasClass('X') && spot32.hasClass('X')
				|| spot13.hasClass('X') && spot23.hasClass('X') && spot33.hasClass('X')
			){

			alert('X wins');
			$("#msg").addClass('o').html('X wins.');
			winner = 'X';
		}

	});

});