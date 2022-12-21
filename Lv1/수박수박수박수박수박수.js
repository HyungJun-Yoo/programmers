// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12922?language=javascript

function solution(n) {
  var answer = "";

  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? "수" : "박";
  }

  return answer;
}

// 테스트 케이스
const test = [3, 4];
const testResult = ["수박수", "수박수박"];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
