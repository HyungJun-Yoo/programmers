// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12937?language=javascript

function solution(num) {
  var answer = "";

  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }

  return answer;
}

// 테스트 케이스
const test = [3, 4];
const testResult = ["Odd", "Even"];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
