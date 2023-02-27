// 완전탐색
// https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
  var answer = [];

  let sum = brown + yellow;
  // 가로 크기 x축
  let x = 2;
  // 세로 크기 y축
  let y = 1;

  for (x; x < sum; x++) {
    y = sum / x;

    if (x >= y && sum % y === 0) {
      if ((x - 2) * (y - 2) === yellow) {
        break;
      }
    }
  }

  answer = [x, y];

  return answer;
}

// 테스트 케이스
const test_brown = [10, 8, 24];
const test_yellow = [2, 1, 24];
const testResult = [
  [4, 3],
  [3, 3],
  [8, 6],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_brown[i], test_yellow[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
