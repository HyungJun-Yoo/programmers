// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function solution(arr) {
  var answer = [];

  answer = arr.filter(
    (value, index) => index !== arr.indexOf(Math.min(...arr))
  );

  return answer.length > 0 ? answer : [-1];
}

// 테스트 케이스
const test = [[4, 3, 2, 1], [10]];
const testResult = [[4, 3, 2], [-1]];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
