// 월간 코드 챌린지 시즌2
// https://school.programmers.co.kr/learn/courses/30/lessons/77884?language=javascript

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let div = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) div.push(j);
    }

    answer += div.length % 2 === 0 ? i : i * -1;
  }

  return answer;
}

// 테스트 케이스
const test_left = [13, 24];
const test_right = [17, 27];
const testResult = [43, 52];

// 실행
for (let i = 0; i < test_left.length; i++) {
  const result = solution(test_left[i], test_right[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
제곱근이 정수면 약수의 개수가 홀수다!

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
*/
