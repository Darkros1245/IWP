let diceRoll = [1, 6, 6, 2, 3, 4, 6];

function get6s_v1(rolls){
	for (let i = 0; i < rolls.length; i++) {
		if (rolls[i] == 6) {
			console.log("Rolls[" + i + "] = " + rolls[i]);
		}
	}
}

function get6s_v2(rolls){
	for (let i = 0; i < rolls.length; i++) {
		if (is6(rolls[i])) {
			console.log("Rolls[" + i + "] = " + rolls[i]);
		}
	}
}

function is6(v){
	return v == 6;
}

function get6s_v3(rolls, f){
	for (let i = 0; i < rolls.length; i++) {
		if (f(rolls[i])) {
			console.log("Rolls[" + i + "] = " + rolls[i]);
		}
	}
}

findDices_v1 = function (rolls, f){
	for (let i = 0; i < rolls.length; i++) {
		if (f(rolls[i])) {
			console.log("Rolls[" + i + "] = " + rolls[i]);
		}
	}
}

findDices_v1(diceRoll, x => x <= 3);