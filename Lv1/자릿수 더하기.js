// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

function solution(n) {
  var answer = 0;

  // 각 자릿수를 확인하기 위해 자연수를 문자열로 변환
  var strN = String(n);

  for (let i = 0; i < strN.length; i++) {
    answer += Number(strN[i]);
  }

  return answer;
}

// 테스트 케이스
const test = [123, 987];
const testResult = [6, 24];

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
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
*/
