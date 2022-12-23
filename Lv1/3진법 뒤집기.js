// 월간 코드 챌린지 시즌1
// https://school.programmers.co.kr/learn/courses/30/lessons/68935?language=javascript

function solution(n) {
  // toString(3) => 3진법 변환
  // split('').reverse().join('') => 앞뒤 반전(3진법)
  var trit = n.toString(3).split("").reverse().join("");

  // parseInt(n진수, n) => 10진수 변환
  return parseInt(trit, 3);
}

// 테스트 케이스
const test = [45, 125];
const testResult = [7, 229];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
