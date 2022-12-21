// 월간 코드 챌린지 시즌3
// https://school.programmers.co.kr/learn/courses/30/lessons/86051?language=javascript

function solution(numbers) {
  var answer = 0;

  // arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let arrs = new Array(9).fill().map((currentValue, index) => index + 1);

  // includes() => 배열이 특정 요소를 포함하고 있는지 판별
  // numbers 배열에 없는 숫자를 확인하고 answer에 더해줌
  arrs
    .filter((arr) => !numbers.includes(arr))
    .forEach((value) => (answer += value));

  return answer;
}

// 테스트 케이스
const test = [
  [1, 2, 3, 4, 6, 7, 8, 0],
  [5, 8, 4, 0, 6, 7, 9],
];
const testResult = [14, 6];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
