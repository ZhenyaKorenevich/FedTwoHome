'use strict'

let americanStates = {
	"AL":"Alabama",
	"AK":"ALaska",
	"AS":"American Saoma",
	"AZ":"Arizona",
	"AR":"Arkansas",
	"CA":"California",
	"CO":"Colorado",
	"CT":"Connecticut",
	"DE":"Delaware"
}

let reverseObjAmericanStates = {};

function transformObject(obj) {
	Object.keys(obj).forEach((stateKey) => {reverseObjAmericanStates[obj[stateKey]] = stateKey;});return reverseObjAmericanStates;
}
console.log(transformObject(americanStates));


// function transformObject(obj){

// 	for(let key in obj){
// 		console.log( `${obj[key]} : ${key}`);
// 	}

// };

// transformObject(americanStates);
