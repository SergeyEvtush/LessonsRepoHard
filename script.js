"use strict";

const spredTheString = (str) => {
	if (Object.prototype.toString.call(str) === "[object String]") {
		const strN = str.trim();
		if (strN.length > 30) {
			return strN.split('').splice(0, 30).join('') + '...';
		}
		else { 
			return strN;
		}
		
	} else { 
		return ('введите другой аргумент, это не строка');
	}
};
console.log(spredTheString(1111111111111111));

 console.log(spredTheString('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'));
 