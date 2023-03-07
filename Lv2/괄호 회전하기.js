// 월간 코드 챌린지 시즌2
// https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

function solution(s) {
  var answer = 0;

  let left_bracket = ["(", "[", "{"];
  let right_bracket = [")", "]", "}"];
  let bracket = s.split("");
  let stack = [];

  // 회전하는 반복문
  for (let i = 0; i < bracket.length; i++) {
    let count = 0;
    // 올바른 괄호를 확인하는 반복문
    for (let j = 0; j < bracket.length; j++) {
      // bracket[j]가 왼쪽 괄호 여부 확인
      let bool = left_bracket.some((v) => v === bracket[j]);

      if (bool) {
        // 왼쪽 괄호라면
        stack.push(bracket[j]);
      } else {
        // 오른쪽 괄호라면

        let index = left_bracket.indexOf(stack[stack.length - 1]);
        if (right_bracket[index] === bracket[j]) {
          stack.pop();
        } else {
          break;
        }
      }

      count++;
    }

    // 올바른 괄호 문자열 여부
    if (stack.length === 0 && count === bracket.length) {
      answer++;
    }

    // 회전 시키기
    let temp = bracket.shift();
    bracket.push(temp);
  }

  return answer;
}

// 테스트 케이스
const test = ["[](){}", "}]()[{", "[)(]", "}}}"];
const testResult = [3, 2, 0, 0];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
