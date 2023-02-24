// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12945?language=javascript

function solution(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
  }

  return fibonacci[n];
}

// 테스트 케이스
const test = [3, 5];
const testResult = [2, 5];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
