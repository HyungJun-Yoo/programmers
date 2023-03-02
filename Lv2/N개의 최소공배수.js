// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

function solution(arr) {
  var answer = 0;

  // 내림차순 정렬
  arr.sort((a, b) => b - a);

  // arr[0]은 arr의 원소 중에서 가장 큰 수
  let lcm = arr[0];
  while (true) {
    // n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자

    // 최소공배수는 n개의 수로 나누었을 때 나머지가 0
    let bool = arr.every((num) => lcm % num === 0);

    // bool이 true라면 lcm은 최소 공배수 (정답)
    if (bool) {
      answer = lcm;
      break;
    }

    // bool이 false라면 lcm에 arr[0] 더하기 (반복)
    lcm += arr[0];
  }

  return answer;
}

// 테스트 케이스
const test = [
  [2, 6, 8, 14],
  [1, 2, 3],
];
const testResult = [168, 6];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
