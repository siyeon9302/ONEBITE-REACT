// async
// 어떤 함수를 비동기 함수로 만들어 주는 키워드
// 함수가 프로미스를 반환하도록 변환해 주는 키워드

async function getData() {
  return new Promise((resolve, result) => {
    setTimeout(() => {
      resolve({
        name: "김시연",
        id: "션",
      });
    }, 1500);
  });
}

// console.log(getData());

// await
// async 함수(async 키워드가 붙은 함수를 말함) 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
}

printData();
