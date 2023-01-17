// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript

function solution(a, b, n) {
  var answer = 0;

  // 빈 병
  let empty_bottle = n;

  while (empty_bottle >= a) {
    // 주는 병
    let give_bottle = Math.floor(empty_bottle / a) * a;
    // 돌려받는 병
    let get_bottle = Math.floor(empty_bottle / a) * b;

    empty_bottle = empty_bottle - give_bottle + get_bottle;

    answer += get_bottle;
  }

  return answer;
}

// 테스트 케이스
const test_a = [2, 3];
const test_b = [1, 1];
const test_n = [20, 20];
const testResult = [19, 9];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_a[i], test_b[i], test_n[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
