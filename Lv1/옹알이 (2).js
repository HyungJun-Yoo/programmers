// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function solution(babbling) {
  var answer = 0;
  const say = ["aya", "ye", "woo", "ma"];

  babbling.forEach((value) => {
    for (let i = 0; i < say.length; i++) {
      if (value.includes(say[i].repeat(2))) {
        break;
      }

      value = value.split(say[i]).join(" ");
    }

    if (value.trim().length === 0) {
      answer += 1;
    }
  });

  return answer;
}

// 테스트 케이스
const test = [
  ["aya", "yee", "u", "maa"],
  ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"],
];
const testResult = [1, 2];

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
function solution(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl, index) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}
*/
