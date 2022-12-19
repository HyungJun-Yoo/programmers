// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(phone_number) {
  // replace() => 문자열 치환
  // slice() => 문자열 자르기
  // repeat() => 문자열 반복
  return phone_number.replace(
    phone_number.slice(0, -4),
    "*".repeat(phone_number.slice(0, -4).length)
  );
}

// 테스트 케이스
const test = ["01033334444", "027778888"];
const testResult = ["*******4444", "*****8888"];

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
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}
*/
