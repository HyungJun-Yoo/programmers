// 탐욕법(Greedy)
// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
  var answer = 0;

  // [50, 50, 70, 80]
  people.sort((x, y) => x - y);

  let start = 0;

  // 역순부터 반복
  // i = 3; i >= 0; i--
  // 50 + 80 <= 100 false / 80kg -> 1개
  // 50 + 70 <= 100 false / 70kg -> 2개
  // 50 + 50 <= 100 true / 50 50 -> 3개
  for (let i = people.length - 1; i >= start; i--) {
    if (people[start] + people[i] <= limit) {
      start++;
    }

    answer += 1;
  }

  return answer;
}

// 테스트 케이스
const test_people = [
  [70, 50, 80, 50],
  [70, 80, 50],
];
const test_limit = [100, 100];
const testResult = [3, 3];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_people[i], test_limit[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
