// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
  // 자릿수의 합 구하기
  let sum = 0;
  String(x)
    .split("")
    .forEach((v) => (sum += Number(v)));

  // 하샤드 수 확인하기
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}

// 테스트 케이스
const test = [10, 12, 11, 13];
const testResult = [true, true, false, false];

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
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}
*/
