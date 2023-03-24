// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/160586?language=javascript

function solution(keymap, targets) {
  var answer = [];

  for (let i = 0; i < targets.length; i++) {
    // "ABCD"의 경우 ["A", "B", "C", "D"]
    const target = targets[i].split("");
    let count = 0;

    for (let j = 0; j < target.length; j++) {
      // ["A", "B", "C", "D"]의 경우 문자열을 하나씩 추출

      let newCnt = 0;

      for (let k = 0; k < keymap.length; k++) {
        let key = keymap[k].indexOf(target[j]) + 1;

        if ((key < newCnt || newCnt === 0) && key !== 0) {
          newCnt = key;
        }
      }

      if (newCnt > 0) {
        count += newCnt;
      } else {
        count = 0;
        break;
      }
    }

    answer[i] = count === 0 ? -1 : count;
  }

  return answer;
}

// 테스트 케이스
const test_keymap = [["ABACD", "BCEFD"], ["AA"], ["AGZ", "BSSS"]];
const test_targets = [["ABCD", "AABB"], ["B"], ["ASA", "BGZ"]];
const testResult = [[9, 4], [-1], [4, 6]];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_keymap[i], test_targets[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
*/
