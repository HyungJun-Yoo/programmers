// 2017 팁스타운
// https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript

function solution(s) {
  var answer = [];

  if (s.length % 2 !== 0) return 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === answer[answer.length - 1]) {
      answer.pop();
      continue;
    }

    answer.push(s[i]);
  }

  return answer.length > 0 ? 0 : 1;
}

// 테스트 케이스
const test = ["baabaa", "cdcd"];
const testResult = [1, 0];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
