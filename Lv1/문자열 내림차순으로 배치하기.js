// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12917?language=javascript

function solution(s) {
  // charCodeAt() => 주어진 인덱스에 대한 유니코드 값을 반환
  return s
    .split("")
    .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
    .join("");
}

// 테스트 케이스
const test = ["Zbcdefg"];
const testResult = ["gfedcbZ"];

// 실행
for (let i = 0; i < test.length; i++) {
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
    return s.split("").sort((a,b) => a<b ? 1:-1).join("")
}
*/
