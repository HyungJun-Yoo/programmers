// 2019 KAKAO BLIND RECRUITMENT
// https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

function solution(N, stages) {
  var answer = [];

  // 스테이지 도전자 수
  let user = stages.length;

  for (let i = 1; i <= N; i++) {
    // 스테이지에 머물고 있는 수 (클리어하지 못함)
    let count = stages.reduce((cnt, value) => cnt + (i === value), 0);

    // answer[스테이지 번호, 실패율]
    // 실패율 = 스테이지에 머물고 있는 수 / 스테이지 도전자 수
    answer.push([i, count / user]);
    user -= count;
  }

  answer = answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);

  return answer;
}

// 테스트 케이스
const test_N = [5, 4];
const test_stages = [
  [2, 1, 2, 6, 2, 4, 3, 3],
  [4, 4, 4, 4, 4],
];
const testResult = [
  [3, 4, 2, 1, 5],
  [4, 1, 2, 3],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_N[i], test_stages[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
