// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12928?language=javascript

function solution(n) {
  var answer = 0;

  // 약수를 담을 배열
  let array = [];

  // 약수 구하기
  // n = 12 일때
  // 12 % 1 === 0 / i = 1
  // 12 % 2 === 0 / i = 2
  // 12 % 3 === 0 / i = 3
  // 12 % 4 === 0 / i = 4
  // 12 % 6 === 0 / i = 6
  // 12 % 12 === 0 / i = 12
  // 12의 약수 [1,2,3,4,6,12]
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
    }
  }

  // 약수의 합 구하기
  array.forEach((num) => {
    answer += num;
  });

  return answer;
}

// 테스트 케이스
const test = [12, 5];
const testResult = [28, 6];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
