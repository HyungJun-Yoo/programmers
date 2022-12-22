// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12950?language=javascript

function solution(arr1, arr2) {
  // 자바스크립트에는 이차원 배열이란 개념이 없다.
  // 한 번에 2차원 배열 선언이 불가능하다

  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];

    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}

// 테스트 케이스
const test_arr1 = [
  [
    [1, 2],
    [2, 3],
  ],
  [[1], [2]],
];
const test_arr2 = [
  [
    [3, 4],
    [5, 6],
  ],
  [[3], [4]],
];
const testResult = [
  [
    [4, 6],
    [7, 9],
  ],
  [[4], [6]],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_arr1[i], test_arr2[i]);

  if (JSON.stringify(result) === JSON.stringify(testResult[i])) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(arr1, arr2) {
  return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}
*/
