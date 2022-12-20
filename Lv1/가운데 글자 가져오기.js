// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

function solution(s) {
  // Math.floor() => 소수점 내림 처리 후 정수 반환
  var strLeng = Math.floor((s.length - 1) / 2);

  // 가운데 글자 추출
  // 홀수라면 s[strLeng], 짝수라면 s.slice(strLeng, strLeng + 2)
  return s.length % 2 === 1 ? s[strLeng] : s.slice(strLeng, strLeng + 2);
}

// 테스트 케이스
const test = ["abcde", "qwer"];
const testResult = ["c", "we"];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
