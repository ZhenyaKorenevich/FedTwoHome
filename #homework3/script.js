'use strict'

// task_3 working_variant

function drawTriangle(symbolTriangle,sizeTriangle){
	let triangle = [];
	if(sizeTriangle == 0){
		for(let i = 0; i < sizeTriangle + 3; i++){
		triangle[i] = new Array(i + 2).join(symbolTriangle);
		console.log(triangle[i]);
		};
	}else if(sizeTriangle == 1){
		for(let i = 0; i < sizeTriangle + 2; i++){
		triangle[i] = new Array(i + 2).join(symbolTriangle);
		console.log(triangle[i]);
		};
	}else if(sizeTriangle == 2){
		for(let i = 0; i < sizeTriangle + 1; i++){
		triangle[i] = new Array(i + 2).join(symbolTriangle);
		console.log(triangle[i]);
		};
	}else{
		for(let i = 0; i < sizeTriangle; i++){
		triangle[i] = new Array(i + 2).join(symbolTriangle);
		console.log(triangle[i]);
	};
	};
};

drawTriangle('*',8);

document.querySelector('.toCapitalClick').onclick = toCapitalCase;
let resultTaskThree = document.querySelector('.resultTaskThree');

function toCapitalCase(string) {
  let toCapitalValue = document.querySelector('.toCapitalCase').value;	
  let words = toCapitalValue.split(" ");
  let stringResult = "";

  for (let i = 0; i < words.length; i++) {
    let nameOfWord = words[i];
    let firstLetter = nameOfWord.substring(0, 1).toUpperCase();
    let remainingLetters = nameOfWord.substring(1, nameOfWord.length)
    stringResult += firstLetter + remainingLetters + " ";
  }

  resultTaskThree.innerHTML = 'Result:' + stringResult;
}
