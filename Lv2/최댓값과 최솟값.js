// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript

function solution(s) {
  var answer = "";

  // 공백으로 구분된 숫자 배열로 저장
  let strArr = s.split(" ");

  answer = `${Math.min(...strArr)} ${Math.max(...strArr)}`;

  return answer;
}

// 테스트 케이스
const test = ["1 2 3 4", "-1 -2 -3 -4", "-1 -1"];
const testResult = ["1 4", "-4 -1", "-1 -1"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
