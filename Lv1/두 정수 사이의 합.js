// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12912?language=javascript

function solution(a, b) {
  var sum = 0;

  // Math.min() => 주어진 숫자들 중 가장 작은 값을 반환
  // Math.max() => 주어진 숫자들 중 가장 큰 값을 반환
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
}

// 테스트 케이스
const test_a = [3, 3, 5];
const test_b = [5, 3, 3];
const testResult = [12, 3, 12];

// 실행
for (let i = 0; i < test_a.length; i++) {
  const result = solution(test_a[i], test_b[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
