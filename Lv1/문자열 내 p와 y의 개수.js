// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

function solution(s) {
  var p_count = 0;
  var y_count = 0;

  // 문자열에서 p의 개수 구하기
  s.split("").forEach((p) => (p.toLowerCase() === "p" ? p_count++ : undefined));

  // 문자열에서 y의 개수 구하기
  s.split("").forEach((y) => (y.toLowerCase() === "y" ? y_count++ : undefined));

  if (p_count === y_count) {
    return true;
  } else {
    return false;
  }
}

// 테스트 케이스
const test = ["pPoooyY", "Pyy"];
const testResult = [true, false];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}
*/
