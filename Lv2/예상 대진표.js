// 2017 팁스타운
// https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=javascript

function solution(n, a, b) {
  var answer = 0;

  for (let i = 0; i < n; i++) {
    answer++;

    // 홀수면 짝수로 만들어서 계산
    a = a % 2 === 1 ? a + 1 : a;
    b = b % 2 === 1 ? b + 1 : b;

    let sum = Math.abs(a - b);

    if (sum === 0) {
      break;
    }

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }

  return answer;
}

// 테스트 케이스
const test_N = [8];
const test_A = [4];
const test_B = [7];
const testResult = [3];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_N[i], test_A[i], test_B[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
*/
