// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12951?language=javascript

function solution(s) {
  var answer = "";

  // 문자열 나누기
  let str = s.split(" ");

  // 나눈 문자열 JadenCase로 만들기
  // 첫문자가 대문자, 그 외의 알파벳은 모두 소문자인 문자열
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt().toUpperCase() + str[i].slice(1).toLowerCase();
  }

  // 문자열 합치기
  answer = str.join(" ");

  return answer;
}

// 테스트 케이스
const test = ["3people unFollowed me", "for the last week"];
const testResult = ["3people Unfollowed Me", "For The Last Week"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
