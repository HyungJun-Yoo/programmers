// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

function solution(s, n) {
  var answer = "";

  answer = s
    .split("")
    .map((value) => {
      if (value === " ") {
        return " ";
      }

      // charCodeAt() => index에 해당하는 문자의 유니코드 값을 반환
      // fromCharCode() => 유니코드 값을 문자열로 반환
      if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) + n >= 123) {
        return String.fromCharCode(value.charCodeAt(0) + n - 26);
      } else if (value.charCodeAt(0) <= 90 && value.charCodeAt(0) + n >= 91) {
        return String.fromCharCode(value.charCodeAt(0) + n - 26);
      }

      return String.fromCharCode(value.charCodeAt(0) + n);
    })
    .join("");

  return answer;
}

// 테스트 케이스
const test_s = ["AB", "z", "a B z"];
const test_n = [1, 1, 4];
const testResult = ["BC", "a", "e F d"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_s[i], test_n[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
