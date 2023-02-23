// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript

function solution(n) {
  var answer = 1;
  // 반복 횟수
  let count = n / 2 + 1;

  for (let i = 1; i < count; i++) {
    let sum = i;
    for (let j = i + 1; j < count; j++) {
      sum += j;

      if (sum === n) {
        answer += 1;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }

  return answer;
}

// 테스트 케이스
const test = [15];
const testResult = [4];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
