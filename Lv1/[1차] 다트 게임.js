// 2018 KAKAO BLIND RECRUITMENT
// https://school.programmers.co.kr/learn/courses/30/lessons/17682?language=javascript

function solution(dartResult) {
  var answer = 0;
  let current = 0;
  let pre = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "S") {
      current = current ** 1;
    } else if (dartResult[i] === "D") {
      current = current ** 2;
    } else if (dartResult[i] === "T") {
      current = current ** 3;
    } else if (dartResult[i] === "*") {
      current = current * 2;
      answer += pre;
    } else if (dartResult[i] === "#") {
      current = current * -1;
    }

    // 숫자인 경우 (0~10 처리)
    if (dartResult[i] >= 0) {
      if (dartResult[i] == 0) continue;

      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        current = 10;
      } else {
        current = dartResult[i];
      }
    } else {
      if (dartResult[i + 1] !== "*" && dartResult[i + 1] !== "#") {
        answer = answer + current;
        pre = current;
        current = 0;
      }
    }
  }

  return answer;
}

// 테스트 케이스
const test = [
  "1S2D*3T",
  "1D2S#10S",
  "1D2S0T",
  "1S*2T*3S",
  "1D#2S*3S",
  "1T2D3D#",
  "1D2S3T*",
];
const testResult = [37, 9, 3, 23, 5, -4, 59];

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
// 정규식 활용
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
*/
