// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

function solution(n) {
  const n_count = n
    .toString(2)
    .split("")
    .filter((one) => one == 1).length;

  return nextNum(n + 1, n_count);
}

function nextNum(num, n_count) {
  const num_count = num
    .toString(2)
    .split("")
    .filter((one) => one == 1).length;
  if (n_count === num_count) {
    return num;
  }

  return nextNum(num + 1, n_count);
}

// 테스트 케이스
const test = [78, 15];
const testResult = [83, 23];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
