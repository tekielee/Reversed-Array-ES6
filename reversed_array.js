function reverseArray(arr) {
	let reversedArr = [];
	for(let i = arr.length - 1; i >= 0 ; i--) {
		reversedArr.push(arr[i]);
	}
	return reversedArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Original array');
console.log(arr);
console.log('Reversed array');
console.log(reverseArray(arr));