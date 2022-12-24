// Summer/Winter Coding(~2018)
// https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget -= d[i];
      answer++;
    } else {
      break;
    }
  }

  return answer;
}

// 테스트 케이스
const test_d = [
  [1, 3, 2, 5, 4],
  [2, 2, 3, 3],
];
const test_budget = [9, 10];
const testResult = [3, 4];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_d[i], test_budget[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
