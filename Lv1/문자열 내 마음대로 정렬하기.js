// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

function solution(strings, n) {
  var answer = [];

  answer = strings.sort((a, b) => {
    if (a.charCodeAt(n) - b.charCodeAt(n) !== 0)
      return a.charCodeAt(n) - b.charCodeAt(n);

    for (let i = 0; i < a.length; i++) {
      if (a.charCodeAt(i) !== b.charCodeAt(i)) {
        return a.charCodeAt(i) - b.charCodeAt(i);
      }
    }
  });

  return answer;
}

// 테스트 케이스
const test_strings = [
  ["sun", "bed", "car"],
  ["abce", "abcd", "cdx"],
];
const test_n = [1, 2];
const testResult = [
  ["car", "bed", "sun"],
  ["abcd", "abce", "cdx"],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_strings[i], test_n[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
// localeCompare() => 문자열과 문자열을 비교하고, 정렬순서에 따른 비교를 할 수 있다.
// https://opentutorials.org/course/50/91
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
*/
