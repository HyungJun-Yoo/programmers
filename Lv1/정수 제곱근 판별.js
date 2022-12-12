// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

function solution(n) {
  var answer = 0;

  // 제곱근에 가까운 양의 정수 확인
  let x = 0;
  while (x ** 2 < n) {
    x++;
  }

  // n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
  x ** 2 === n ? (answer = (x + 1) ** 2) : (answer = -1);

  return answer;
}

// 테스트 케이스
const test = [121, 3];
const testResult = [144, -1];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
  function solution(n){
      // Math.sqrt() => 숫자의 제곱근을 반환
      // Math.pow(값, 지수) => 승수를 계산한 결과를 반환
      return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1
  }
  */
