// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

function solution(num) {
  if (num === 1) {
    return 0;
  }

  var answer = 0;

  // 500번 반복
  while (answer < 500) {
    answer++;

    // 짝수의 경우
    if (num % 2 === 0) {
      num = num / 2;
    }
    // 홀수의 경우
    else if (num % 2 === 1) {
      num = num * 3 + 1;
    }

    // 500번 전에 반복을 빠져나오는 경우
    if (num === 1) {
      break;
    }
  }

  if (answer === 500) {
    return -1;
  } else {
    return answer;
  }
}

// 테스트 케이스
const test = [6, 16, 626331];
const testResult = [8, 4, -1];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
