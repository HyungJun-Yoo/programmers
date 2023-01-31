// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript

function solution(food) {
  var answer = "0";

  for (let i = food.length - 1; i > 0; i--) {
    let count = Math.floor(food[i] / 2);

    for (let j = 0; j < count; j++) {
      answer = String(i) + answer + String(i);
    }
  }

  return answer;
}

// 테스트 케이스
const test = [
  [1, 3, 4, 6],
  [1, 7, 1, 2],
];
const testResult = ["1223330333221", "111303111"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}
*/
