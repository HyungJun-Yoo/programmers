// 스택/큐
// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr) {
  var answer = [];
  answer = arr.filter((value, index) =>
    value === arr[index - 1] ? false : true
  );
  return answer;
}

// 테스트 케이스
const test = [
  [1, 1, 3, 3, 0, 1, 1],
  [4, 4, 4, 3, 3],
];
const testResult = [
  [1, 3, 0, 1],
  [4, 3],
];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
