// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
}); // 매 반복마다 이 콜백함수를 호출하고 매개변수로 현재요소의 값, 현재 반복 카운트, 전체 배열의 값 전달해줌

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr); // [2, 4, 6] 출력됨

// 2. includes
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

// console.log(isInclude);

// 3. indexOf
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

// 5. find
let arr5 = [{ name: "김시연" }, { name: "아이유" }];

const finded = arr5.find((item) => item.name === "김시연");

console.log(finded);
