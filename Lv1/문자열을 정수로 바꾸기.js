// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12925?language=javascript

function solution(s) {
  return Number(s);
}

// 테스트 케이스
const test = ["1234", "-1234"];
const testResult = [1234, -1234];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
