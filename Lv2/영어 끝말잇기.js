// Summer/Winter Coding(~2018)
// https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

function solution(n, words) {
  // answer = [가장 먼저 탈락하는 사람의 번호, 자신의 몇 번째 차례에 탈락하는지]
  var answer = [];
  // 끝말잇기 배열
  let wordChain = [];

  for (let i = 0; i < words.length; i++) {
    if (wordChain.length === 0) {
      wordChain.push(words[i]);
      continue;
    }

    let chainLength = wordChain[wordChain.length - 1].length;
    let bool = wordChain.every((word) => word !== words[i]);
    // 앞사람이 말한 단어의 마지막 문자로 시작하는지 확인 && 이전에 말했던 단어가 있는지 확인
    if (
      words[i][0] === wordChain[wordChain.length - 1][chainLength - 1] &&
      bool
    ) {
      wordChain.push(words[i]);
    } else {
      // 가장 먼저 탈락하는 사람의 번호 구하기
      let failNumber = (i + 1) % n === 0 ? n : (i + 1) % n;
      answer.push(failNumber);
      // 자신의 몇 번째 차례에 탈락하는지 구하기
      let order = Math.ceil((i + 1) / n);
      answer.push(order);
      break;
    }
  }

  return answer.length === 0 ? [0, 0] : answer;
}

// 테스트 케이스
const test_n = [3, 5, 2];
const test_words = [
  ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"],
  [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ],
  ["hello", "one", "even", "never", "now", "world", "draw"],
];
const testResult = [
  [3, 3],
  [0, 0],
  [1, 3],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_n[i], test_words[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
