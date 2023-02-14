// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript

function solution(X, Y) {
  var answer = "";

  let number = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  let xArr = X.split("");
  let yArr = Y.split("");

  for (let i = 0; i < number.length; i++) {
    let x = xArr.filter((value) => number[i] == value).length;
    let y = yArr.filter((value) => number[i] == value).length;

    if (x > 0 && y > 0) {
      if (x > y) {
        answer += number[i].repeat(y);
      } else {
        answer += number[i].repeat(x);
      }
    }
  }

  if (answer.length === 0) return "-1";
  if (answer[0] === "0") return "0";

  return answer;
}

// 테스트 케이스
const test_X = ["100", "100", "100", "12321", "5525"];
const test_Y = ["2345", "203045", "123450", "42531", "1255"];
const testResult = ["-1", "0", "10", "321", "552"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_X[i], test_Y[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(X, Y) {
  let result = "";
  const numObj = {};

  for (const char of X) {
    numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === "") return "-1";
  if (+result === 0) return "0";
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join("");
}
*/
