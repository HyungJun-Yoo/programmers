// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/161989?language=javascript

function solution(n, m, section) {
  var answer = 0;

  let temp = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > temp) {
      temp = section[i] + (m - 1);
      answer++;
    }
  }

  return answer;
}

// 테스트 케이스
const test_n = [8, 5, 4];
const test_m = [4, 4, 1];
const test_section = [
  [2, 3, 6],
  [1, 3],
  [1, 2, 3, 4],
];
const testResult = [2, 1, 4];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_n[i], test_m[i], test_section[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
