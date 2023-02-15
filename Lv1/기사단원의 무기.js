// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript

function div(n) {
  let div = [];

  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    cnt++;
    div.push(cnt);
  }

  return div;
}

function solution(number, limit, power) {
  var answer = 0;
  let div_length = [];

  // 약수의 개수
  div_length = div(number);

  div_length.forEach((value) => {
    if (value <= limit) {
      answer += value;
    } else {
      answer += power;
    }
  });

  return answer;
}

// 테스트 케이스
const test_number = [5, 10];
const test_limit = [3, 3];
const test_power = [2, 2];
const testResult = [10, 21];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_number[i], test_limit[i], test_power[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}
*/
