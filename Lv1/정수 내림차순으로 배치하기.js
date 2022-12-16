// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12933?language=javascript

function solution(n) {
  // + => 결과값을 정수형으로 만들기 위함
  // String(n) => 숫자를 문자로
  // split() => 문자열 분리 이후 배열로 만듬
  // sort() => 정렬, sort((x - y) => y - x) 고차함수 정렬 (내림차순)
  // join() => 배열의 모든 요소를 문자열로 만듬
  return +String(n)
    .split("")
    .sort((x, y) => y - x)
    .join("");
}

// 테스트 케이스
const test = [118372];
const testResult = [873211];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
