// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript

function solution(s) {
  var answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.indexOf(s[i], i)) {
      answer.push(-1);
    } else {
      answer.push(s.indexOf(s[i], i) - s.lastIndexOf(s[i], i - 1));
    }
  }

  return answer;
}

// 테스트 케이스
const test = ["banana", "foobar"];
const testResult = [
  [-1, -1, -1, 2, 2, 2],
  [-1, -1, 1, -1, -1, -1],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
*/
