// 5가지 배열 메서드
// 1. filter

let arr1 = [
  { name: "김시연", hobby: "노래" },
  { name: "이지은", hobby: "노래" },
  { name: "김태하", hobby: "클레이" },
];

const singingPeople = arr1.filter((item) => item.hobby === "노래");

// console.log(singingPeople);

// 2. map
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
let arr3 = [10, 3, 4];
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

// 4. toSorted
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
let arr6 = ["hi", "im", "siyeon"];
const joined = arr6.join();
