// 월간 코드 챌린지 시즌2
// https://school.programmers.co.kr/learn/courses/30/lessons/76501?language=javascript

function solution(absolutes, signs) {
  var sum = 0;

  absolutes.forEach((value, index) => {
    sum += signs[index] ? value : -value;
  });

  return sum;
}

// 테스트 케이스
const test_absolutes = [
  [4, 7, 12],
  [1, 2, 3],
];
const test_signs = [
  [true, false, true],
  [false, false, true],
];
const testResult = [9, 0];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_absolutes[i], test_signs[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
*/
