// 해시
// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  var answer = "";

  participant.sort();
  completion.sort();

  for (let index = 0; index < participant.length; index++) {
    if (participant[index] !== completion[index]) {
      answer = participant[index];
      break;
    }
  }

  return answer;
}

// 테스트 케이스
const test_participant = [
  ["leo", "kiki", "eden"],
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["mislav", "stanko", "mislav", "ana"],
];
const test_completion = [
  ["eden", "kiki"],
  ["josipa", "filipa", "marina", "nikola"],
  ["stanko", "ana", "mislav"],
];
const testResult = ["leo", "vinko", "mislav"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_participant[i], test_completion[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(participant, completion) {
  let map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [key, value] of map) {
    if (value > 0) return key;
  }
}
*/
