// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

function solution(s) {
  var answer = 0;
  let str = [];

  // 첫 번째 글자
  let first_char = "";
  // 첫 번째 글자와 같은 글자 카운트
  let same_char = 0;
  // 첫 번째 글자와 다른 글자 카운트
  let diff_char = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!first_char) {
      first_char = char;
      same_char++;
    } else {
      if (first_char === char) {
        same_char++;
      } else {
        diff_char++;
      }
    }

    if (same_char === diff_char) {
      str.push(
        s
          .split("")
          .splice(i - same_char, same_char + diff_char)
          .join("")
      );
      first_char = "";
      same_char = 0;
      diff_char = 0;
    } else {
      if (i === s.length - 1) {
        str.push(
          s
            .split("")
            .splice(i - 1, 1)
            .join("")
        );
      }
    }
  }

  answer = str.length;

  return answer;
}

// 테스트 케이스
const test = ["banana", "abracadabra", "aaabbaccccabba"];
const testResult = [3, 6, 3];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
