// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12919?language=javascript

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}

// 테스트 케이스
const test = [["Jane", "Kim"]];
const testResult = ["김서방은 1에 있다"];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
