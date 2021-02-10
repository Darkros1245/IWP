let size = 8;
let string1 = " x";
let string2 = "x ";
for (let i = 0; i < size; i++){
	if (i % 2 === 0) console.log(string1.repeat(size));
	else console.log(string2.repeat(size));
}