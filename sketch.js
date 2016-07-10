var numSquares = 16
var squareColor = "black"
$(document).ready(function() {
	  	createEtch (numSquares, squareColor);    //Creates grid to start the site
		$('.restart').click(function() {			
				$('.etches').remove();
				createEtch (numSquares, squareColor);
			//$('.etches').addClass('coloredBlank'); Did not reset coloured in squares...
		});
		$('.coloroption').click(function() {						/*selection from colour drop down or trail button pressed */
			/*squareColor = $(this).data().value; $($this).attr('data-color');*/
			squareColor = $(this).attr('data-color');
			$('.etches').remove();
			createEtch (numSquares, squareColor);
		});
		$('#squaresbuttons').click(function() {	
			$('.etches').remove();
			numSquares = prompt("Please enter number of etch squares (Default 16)");
			if (numSquares < 65 && numSquares > 3) {
				createEtch (numSquares, 'black');
			}
			else {
				alert("Not a valid response. Value must be between 4 and 64. Setting to default.");
				numSquares = 16;
				createEtch (numSquares, 'black');
			}
		});
 });

		
    
function createEtch(squaresTotal, colorIn) { 
   	var width = (449 / squaresTotal);  	
	
	for (var i = 0; i < (squaresTotal * squaresTotal); i++) {
   		$('#grid').append('<div class = "etches"></div>');
   		}
	$('.etches').height(width);
	$('.etches').width(width);

    $('.etches').on('mouseenter', function() {
		if (colorIn === "random") {
			randomColor();
    		$(this).css('background-color', squareColor);
		}
		else if (colorIn === "trail") {
			$(this).css('background-color', 'black').fadeTo(2000,0); //buggy
			
		}
		
		else {
			squareColor = colorIn;
			$(this).css('background-color', squareColor);
		}
	});
}

function randomColor() {   //Creates random Colors
	var red = Math.floor((Math.random() * 255) + 1); 
	var green = Math.floor((Math.random() * 255) + 1); 
	var blue = Math.floor((Math.random() * 255) + 1); 
	squareColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

//Dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
