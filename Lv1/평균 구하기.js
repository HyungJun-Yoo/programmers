// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

function solution(arr) {
  var answer = 0;
  var sum = 0;

  // 배열 arr 더하기
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // 배열 arr 평균값 구하기
  answer = sum / arr.length;

  return answer;
}

// 테스트 케이스
const test = [
  [1, 2, 3, 4],
  [5, 5],
];
const testResult = [2.5, 5.0];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
