// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function solution(number) {
  var answer = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }

  return answer;
}

// 테스트 케이스
const test = [
  [-2, 3, 0, 2, -5],
  [-3, -2, -1, 0, 1, 2, 3],
  [-1, 1, -1, 1],
];
const testResult = [2, 5, 0];

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
function solution(number) {
    let result = 0;

    const combination = (current, start) => {
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}
*/
