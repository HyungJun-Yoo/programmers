// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function solution(new_id) {
  // 1단계 - .toLowerCase()
  // 2단계 - .replace(/[^a-z-_.]/g, '')
  // 3단계 - .replace(/\.{2,}/g, '.')
  // 4단계 - .replace(/^\.|\.$/g, '')
  // 5단계 - .replace(/^$/g, 'a')
  // 6단계 - .substr(0, 15).replace(/\.$/g, '')
  let str = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/g, "a")
    .substr(0, 15)
    .replace(/\.$/g, "");

  // 7단계
  if (str.length <= 2) {
    const len = str.length;
    str = str + str.charAt(len - 1).repeat(3 - len);
  }

  return str;
}

// 테스트 케이스
const test = [
  "...!@BaT#*..y.abcdefghijklm",
  "z-+.^.",
  "=.=",
  "123_.def",
  "abcdefghijklmn.p",
];
const testResult = [
  "bat.y.abcdefghi",
  "z--",
  "aaa",
  "123_.def",
  "abcdefghijklmn",
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
