// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);

const newLength = arr1.push(6, 7, 8, 9);
// console.log(newLength);

// 2. pop
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3. shift
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(newLength2, arr4);

// 5. slice
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); //자르기 시작할 인덱스, 잘라낼 범위 끝 인덱스 +1 (이 전까지 자른다고 보면 됨)
let sliced3 = arr5.slice(-1);
console.log(sliced);

// 6. concat
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
