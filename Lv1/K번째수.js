// 정렬
// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
  var answer = [];

  commands.forEach((e) => {
    let arr = array
      .slice(e[0] - 1, e[1])
      .sort((a, b) => a - b)
      .filter((value, index) => index === e[2] - 1);
    answer.push(...arr);
  });

  return answer;
}

// 테스트 케이스
const test_array = [[1, 5, 2, 6, 3, 7, 4]];
const test_commands = [
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ],
];
const testResult = [[5, 6, 3]];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_array[i], test_commands[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}
*/
