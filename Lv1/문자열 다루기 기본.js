// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12918?language=javascript

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    // every() => 배열 안의 모든 요소가 조건에 맞는지 확인 (true, false 반환)
    return s.split("").every((value) => Number.isInteger(Number(value)));
  }

  return false;
}

// 테스트 케이스
const test = ["a234", "1234"];
const testResult = [false, true];

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
function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
*/
