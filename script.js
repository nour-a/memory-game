var memoryArray = ['C','B','D','F','A','E','F','A','D','B','E','C'];
var memoryValues = [];
var memoryIndex = [];
var counter = 0;

function flip(square,val){
	var output = 'sq'+ square;
	var mySquare =document.getElementById('output');
	if(mysquare.innerHTML == "" && memoryValues.length < 2){
		mysquare.innerHTML = val;
		if(memoryValues.length == 0){
			memoryValues.push(val);
			memoryIndex.push(square);
		} else if(memoryValues.length == 1){
			memoryValues.push(val);
			memoryIndex.push(square);
			if(memoryValues[0] == memoryValues[1]){
				counter += 2;
				memoryValues = [];
            	memoryIndex = [];
				if(counter == memoryArray.length){
					alert("Do you like to play again?");
					location.reload(true);
				}
			} else {
				function flipBack(){
				    var square_1 = document.getElementById('output'+memoryIndex[0]);
				    var square_2 = document.getElementById('output'+[1]);
            	    square_1.innerHTML = "";
            	    square_2.innerHTML = "";
				    memoryValues = [];
            	    memoryIndex = [];
				}
				setTimeout(flipBack(), 300);
			}
		}
	}
}