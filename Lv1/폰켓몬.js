// 해시
// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  // length = (N/2 마리)
  const length = nums.length / 2;

  // 중복 제거된 배열
  const array = [...new Set(nums)];

  return array.length >= length ? length : array.length;
}

// 테스트 케이스
const test = [
  [3, 1, 2, 3],
  [3, 3, 3, 2, 2, 4],
  [3, 3, 3, 2, 2, 2],
];
const testResult = [2, 3, 2];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
