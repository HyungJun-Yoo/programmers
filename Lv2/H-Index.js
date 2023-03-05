// 정렬
// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => b - a);

  for (let index = 0; index < citations.length; index++) {
    if (citations[index] === 0 && index === 0) continue;

    if (citations[index] > index) {
      answer++;
    }
  }

  return answer;
}

// 테스트 케이스
const test = [[3, 0, 6, 1, 5], [2], [25, 8, 5, 3, 3], [6, 5, 5, 5, 3, 2, 1, 0]];
const testResult = [3, 1, 3, 4];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
