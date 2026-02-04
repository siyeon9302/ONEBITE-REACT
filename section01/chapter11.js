// 함수 선언: 함수를 새롭게 만든다

function getArea(width, height) {
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);
