// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

function solution(n) {
  var answer = [];

  // (n+'') => 숫자를 문자로
  // split() => 문자열 분리 이후 배열로 만듬
  // reverse() => 배열을 뒤집음
  // map(arr => Number(arr)) => 문자 배열을 숫자 배열로 변환
  answer = (n + "")
    .split("")
    .reverse()
    .map((arr) => Number(arr));

  return answer;
}

// 테스트 케이스
const test = [12345];
const testResult = [[5, 4, 3, 2, 1]];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(n) {
    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
*/
