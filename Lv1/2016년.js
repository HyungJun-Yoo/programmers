// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
  var answer = "";

  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  answer = week[new Date(`2016-${a}-${b}`).getDay()];

  return answer;
}

// 테스트 케이스
const test_a = [5];
const test_b = [24];
const testResult = ["TUE"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_a[i], test_b[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
