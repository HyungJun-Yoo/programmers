// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

function solution(s) {
  var answer = s
    .split(" ")
    .map((value) => {
      return value
        .split("")
        .map((value, index) => {
          return index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
        })
        .join("");
    })
    .join(" ");

  return answer;
}

// 테스트 케이스
const test = ["try hello world"];
const testResult = ["TrY HeLlO WoRlD"];

// 실행
for (let i = 0; i < test.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
