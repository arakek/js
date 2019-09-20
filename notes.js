/*Поиск кол-ва символов в строке*/
function countBs(str, letter) {
	var count = 0;
	for (var i=0; i < str.length; i++) {
		if (str[i] == letter) count++;
	}
	return count;
}
console.log(countBs("kakkerlak", "k"));
