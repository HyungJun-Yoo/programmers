// 탐욕법(Greedy)
// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  var answer = new Array(n).fill(true);
  var lend = new Array(n).fill(false);

  // 전체 학생의 체육복 여부 => 예시) [true, false, true, false, true]
  // true => 체육복이 있는 학생, false => 체육복을 도난당한 학생
  answer = answer.map((value, index) => !lost.includes(index + 1));

  // 체육복을 빌려줄 수 있는 학생 여부 => 예시) [true, false, true, false, true]
  // true => 여벌 체육복이 있는 학생, false => 여벌 체육복이 없는 학생
  lend = lend.map((value, index) => reserve.includes(index + 1));

  // 여벌 체육복이 있는 학생이 체육복을 도난당한 경우
  answer.forEach((value, index) => {
    if (value === false && lend[index] === true) {
      answer[index] = true;
      lend[index] = false;
    }
  });

  // 체육복 빌려주기
  answer.forEach((value, index) => {
    if (
      value === false &&
      (lend[index - 1] === true || lend[index + 1] === true)
    ) {
      if (lend[index - 1] === true) {
        lend[index - 1] = false;
        answer[index] = true;
      } else {
        lend[index + 1] = false;
        answer[index] = true;
      }
    }
  });

  return answer.filter((value) => value === true).length;
}

// 테스트 케이스
const test_n = [5, 5, 3];
const test_lost = [[2, 4], [2, 4], [3]];
const test_reserve = [[1, 3, 5], [3], [1]];
const testResult = [5, 4, 2];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_n[i], test_lost[i], test_reserve[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
