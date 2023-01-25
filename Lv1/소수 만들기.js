// Summer/Winter Coding(~2018)
// https://school.programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

function solution(nums) {
  var answer = 0;
  var sum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // 3개의 수 더하기
        sum = nums[i] + nums[j] + nums[k];

        // 소수 판별
        let n = 2;
        let result = true;

        while (n <= parseInt(Math.sqrt(sum))) {
          if (sum % n === 0) {
            result = false;
            break;
          }
          n++;
        }

        if (result === true) answer++;
      }
    }
  }

  return answer;
}

// 테스트 케이스
const test = [
  [1, 2, 3, 4],
  [1, 2, 7, 6, 4],
];
const testResult = [1, 4];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
