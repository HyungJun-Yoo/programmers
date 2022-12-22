// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

/*
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var star = "";

    for (let i = 0; i < b; i++) {
      for (let j = 0; j < a; j++) {
        star += "*";
      }

      star += "\n";
    }

    console.log(star);
  });
*/

function solution(n, m) {
  var star = "";

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      star += "*";
    }

    if (i < m - 1) star += "\n";
  }

  return star;
}

// 테스트 케이스
const test_n = [5];
const test_m = [3];
const testResult = ["*****\n*****\n*****"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_n[i], test_m[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
});
*/
