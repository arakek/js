/*Поиск кол-ва символов в строке*/
function countBs(str, letter) {
	var count = 0;
	for (var i=0; i < str.length; i++) {
		if (str[i] == letter) count++;
	}
	return count;
}
//console.log(countBs("kakkerlak", "k"));
//end

/*Сумма диапазона*/
range = (start, end, h) => {
	if (h == null)
		(start > end) ? h = -1 : h = 1
	let vector = [];
	if (h > 0) {
		for (let i = start; i <= end; i += h)
			vector.push(i);
	} else {
		for (let i = start; i >= end; i += h)
			vector.push(i);
	}
	return vector;
};

sum = (range) => {
	let s = 0;
	for (let i of range)
		s += i;
	return s;
};

//console.log(sum(range(5, 2, -1)));
//console.log(sum(range(5,2)));
//end
