// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript

function solution(t, p) {
  var array = [];

  for (let i = 0; i < t.length + 1 - p.length; i++) {
    let str = "";

    for (let j = 0; j < p.length; j++) {
      str += t[i + j];
    }

    if (parseInt(str) <= parseInt(p)) {
      array.push(parseInt(str));
    }
  }

  return array.length;
}

// 테스트 케이스
const test_t = ["3141592", "500220839878", "10203"];
const test_p = ["271", "7", "15"];
const testResult = [2, 8, 3];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_t[i], test_p[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
    }
    return count;
}
*/
