// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function solution(x, n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

// 테스트 케이스
const test_x = [2, 4, -4];
const test_n = [5, 3, 2];
const testResult = [
  [2, 4, 6, 8, 10],
  [4, 8, 12],
  [-4, -8],
];

// 실행
for (let i = 0; i < test_x.length; i++) {
  const result = solution(test_x[i], test_n[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
  function solution(x, n) {
      return Array(n).fill(x).map((v, i) => (i + 1) * v)
  }
*/
