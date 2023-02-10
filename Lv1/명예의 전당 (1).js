// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript

function solution(k, score) {
  var answer = [];
  let stack = [];

  for (let i = 0; i < score.length; i++) {
    stack.push(score[i]);
    stack.sort((a, b) => b - a);

    if (stack.length > k) {
      stack.pop();
    }

    answer.push(stack[stack.length - 1]);
  }

  return answer;
}

// 테스트 케이스
const test_k = [3, 4];
const test_score = [
  [10, 100, 20, 150, 1, 100, 200],
  [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000],
];
const testResult = [
  [10, 10, 10, 20, 20, 100, 100],
  [0, 0, 0, 0, 20, 40, 70, 70, 150, 300],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_k[i], test_score[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
