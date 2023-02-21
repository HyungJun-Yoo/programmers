// 스택/큐
// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s) {
  var answer = true;

  // 괄호를 담을 배열
  let bracket = [];

  for (let i = 0; i < s.length; i++) {
    if (bracket.length === 0) {
      // bracket에 값이 없으면 괄호(s[i]) push
      bracket.push(s[i]);

      // 만약 push한 괄호가 "(" 아니라면 반복문 빠져나옴
      if (s[i] !== "(") {
        break;
      }
    } else {
      // bracket에 값이 있으면 실행

      if (s[i] === "(") {
        // s[i]가 "(" 라면 bracket에 괄호 push
        bracket.push(s[i]);
      } else {
        // s[i]가 ")" 라면 bracket에 괄호 pop
        bracket.pop();
      }
    }
  }

  // bracket에 값이 있으면 ")" 값들만 들어있음
  bracket.length === 0 ? answer : (answer = false);

  return answer;
}

// 테스트 케이스
const test = ["()()", "(())()", ")()(", "(()("];
const testResult = [true, true, false, false];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
