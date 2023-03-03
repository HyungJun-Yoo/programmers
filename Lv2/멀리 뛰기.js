// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12914?language=javascript

function solution(n) {
  var answer = 0;
  let array = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    array[i] = (array[i - 1] + array[i - 2]) % 1234567;
  }

  answer = array[n];

  return answer;
}

// 테스트 케이스
const test = [4, 3, 5, 6];
const testResult = [5, 3, 8, 13];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 5칸, 6칸 케이스
/*
5칸
(1칸, 1칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 1칸, 1칸)
(1칸, 2칸, 2칸)
(1칸, 1칸, 2칸, 1칸)
(1칸, 1칸, 1칸, 2칸)
(2칸, 1칸, 1칸, 1칸)
(2칸, 2칸, 1칸)
(2칸, 1칸, 2칸)


6칸
(1칸, 1칸, 1칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 2칸, 1칸)
(1칸, 2칸, 1칸, 2칸)
(1칸, 1칸, 2칸, 1칸, 1칸)
(1칸, 1칸, 2칸, 2칸)
(1칸, 1칸, 1칸, 2칸, 1칸)
(1칸, 1칸, 1칸, 1칸, 2칸)
(2칸, 1칸, 1칸, 1칸, 1칸)
(2칸, 2칸, 1칸, 1칸)
(2칸, 1칸, 2칸, 1칸)
(2칸, 1칸, 1칸, 2칸)
(2칸, 2칸, 2칸)
*/
