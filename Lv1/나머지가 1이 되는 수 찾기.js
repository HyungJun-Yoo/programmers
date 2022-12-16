// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/87389?language=javascript

function solution(n) {
  var answer = 0;

  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }

  return answer;
}

// 테스트 케이스
const test = [10, 12];
const testResult = [3, 11];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
