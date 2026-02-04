// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열의 원소에 접근하기
let item1 = arrC[0];
let item2 = arrC[1]; // 배열 접근 시 사용하는 숫자를 인덱스라고 표현함

arrC[0] = "hello";

console.log(item1, item2);
