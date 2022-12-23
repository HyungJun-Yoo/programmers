// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12940?language=javascript

function solution(n, m) {
  var answer = [];

  // 최대 공약수
  let gcd = [];
  for (let i = 1; i <= (n < m ? m : n); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd.push(i);
    }
  }
  answer.push(Math.max(...gcd));

  // 최소 공배수
  answer.push(answer[0] * (n / answer[0]) * (m / answer[0]));

  return answer;
}

// 테스트 케이스
const test_n = [3, 2];
const test_m = [12, 5];
const testResult = [
  [3, 12],
  [1, 10],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_n[i], test_m[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(a, b) {
  var gcd = calc_gcd(a, b);
  var lcm = (a * b) / gcd;

    return [gcd, lcm];
}

function calc_gcd(a, b) {
  if (b == 0) return a;
    return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}
*/
