// 월간 코드 챌린지 시즌1
// https://school.programmers.co.kr/learn/courses/30/lessons/70128?language=javascript

function solution(a, b) {
  var sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

// 테스트 케이스
const test_a = [
  [1, 2, 3, 4],
  [-1, 0, 1],
];
const test_b = [
  [-3, -1, 0, 2],
  [1, 0, -1],
];
const testResult = [3, -2];

// 실행
for (let i = 0; i < test_a.length; i++) {
  const result = solution(test_a[i], test_b[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
*/
