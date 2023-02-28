// Summer/Winter Coding(~2018)
// https://school.programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

function solution(n) {
  var ans = 0;

  while (n !== 0) {
    if (n % 2 === 0) {
      // 순간이동이 가능한 경우
      // 2로 나누어 떨어짐
      n /= 2;
    } else {
      // 순간이동이 불가능한 경우 (점프)
      n -= 1;
      ans++;
    }
  }

  return ans;
}

// 테스트 케이스
const test = [5, 6, 5000];
const testResult = [2, 2, 5];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
