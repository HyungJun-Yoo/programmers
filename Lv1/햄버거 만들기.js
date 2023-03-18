// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript

function solution(ingredient) {
  var answer = 0;
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      const hamburger = stack.slice(-4).join("");

      if (hamburger === "1231") {
        stack.splice(-4);
        answer++;
      }
    }
  }

  return answer;
}

// 테스트 케이스
const test = [
  [2, 1, 1, 2, 3, 1, 2, 3, 1],
  [1, 3, 2, 1, 2, 1, 3, 1, 2],
];
const testResult = [2, 0];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
