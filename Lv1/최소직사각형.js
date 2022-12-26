// 완전탐색
// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
  var rows = sizes.map((size) => (size[0] > size[1] ? size[0] : size[1]));
  var cols = sizes.map((size) => (size[1] < size[0] ? size[1] : size[0]));

  return Math.max(...rows) * Math.max(...cols);
}

// 테스트 케이스
const test = [
  [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ],
  [
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ],
  [
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ],
];
const testResult = [4000, 120, 133];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
