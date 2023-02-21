// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript

function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

// 테스트 케이스
const test_A = [
  [1, 4, 2],
  [1, 2],
];
const test_B = [
  [5, 4, 4],
  [3, 4],
];
const testResult = [29, 10];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_A[i], test_B[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
