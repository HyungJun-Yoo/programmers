// 완전탐색
// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function solution(answers) {
  var answer = [];

  let user1 = [1, 2, 3, 4, 5];
  let user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let counts = new Array(3).fill(0);

  answers.forEach((result, index) => {
    // 만약 index에 6번이 들어오면 6 % 5 = 1번 결과와 비교하게 된다
    if (result === user1[index % user1.length]) counts[0]++;
    // 만약 index에 9번이 들어오면 9 % 8 = 1번 결과와 비교하게 된다
    if (result === user2[index % user2.length]) counts[1]++;
    // 만약 index에 11번이 들어오면 11 % 10 = 1번 결과와 비교하게 된다
    if (result === user3[index % user3.length]) counts[2]++;
  });

  // 가장 많은 문제 맞춘 사람
  let maxCount = Math.max(...counts);
  counts.forEach((count, index) => {
    if (count === maxCount) answer.push(index + 1);
  });

  return answer;
}

// 테스트 케이스
const test = [
  [1, 2, 3, 4, 5],
  [1, 3, 2, 4, 2],
];
const testResult = [[1], [1, 2, 3]];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
