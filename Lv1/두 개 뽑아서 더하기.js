// 월간 코드 챌린지 시즌1
// https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];

      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}

// 테스트 케이스
const test = [
  [2, 1, 3, 4, 1],
  [5, 0, 2, 7],
];
const testResult = [
  [2, 3, 4, 5, 6, 7],
  [2, 5, 7, 9, 12],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
