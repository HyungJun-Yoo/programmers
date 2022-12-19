// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

function solution(arr, divisor) {
  var answer = [];

  answer = arr.filter((value) => value % divisor === 0).sort((a, b) => a - b);

  return answer.length > 0 ? answer : [-1];
}

// 테스트 케이스
const test_arr = [
  [5, 9, 7, 10],
  [2, 36, 1, 3],
  [3, 2, 6],
];
const test_divisor = [5, 1, 10];
const testResult = [[5, 10], [1, 2, 3, 36], [-1]];

// 실행
for (let i = 0; i < test_arr.length; i++) {
  const result = solution(test_arr[i], test_divisor[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
