// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript

function solution(k, m, score) {
  var answer = 0;
  let boxs = [];

  // 내림차순 정렬
  score.sort((a, b) => b - a);

  // 사과 상자
  let apple = [];
  for (let i = 0; i < score.length; i++) {
    apple.push(score[i]);

    if ((i + 1) % m === 0) {
      boxs.push(apple);
      apple = [];
    }
  }

  // 가격
  boxs.forEach((box) => {
    let min = Math.min(...box);
    answer += min * m;
  });

  return answer;
}

// 테스트 케이스
const test_k = [3, 4];
const test_m = [4, 3];
const test_score = [
  [1, 2, 3, 1, 2, 3, 1],
  [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2],
];
const testResult = [8, 33];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_k[i], test_m[i], test_score[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
