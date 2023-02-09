// 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
// https://school.programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
  var answer = [];
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  // 일치하는 번호
  let same_number = win_nums.filter((win_num) =>
    lottos.includes(win_num)
  ).length;
  // 불일치하는 번호
  let discord_number = win_nums.filter(
    (win_num) => !lottos.includes(win_num)
  ).length;
  // 0의 개수
  let zero_number = lottos.filter((lotto) => lotto === 0).length;

  answer[0] = rank[same_number + zero_number];
  answer[1] = rank[6 - discord_number];

  return answer;
}

// 테스트 케이스
const test_lottos = [
  [44, 1, 0, 0, 31, 25],
  [0, 0, 0, 0, 0, 0],
  [45, 4, 35, 20, 3, 9],
];
const test_win_nums = [
  [31, 10, 45, 1, 6, 19],
  [38, 19, 20, 40, 15, 25],
  [20, 9, 3, 45, 4, 35],
];
const testResult = [
  [3, 5],
  [1, 6],
  [1, 1],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_lottos[i], test_win_nums[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
