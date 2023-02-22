// 월간 코드 챌린지 시즌1
// https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

function solution(s) {
  // answer = [이진 변환 횟수, 제거한 0의 개수]
  var answer = [0, 0];

  while (s !== "1") {
    // 문자열의 모든 0을 제거 (조건 1번)
    let noZero = s
      .split("")
      .filter((char) => {
        if (char === "0") {
          // 제거한 0의 개수
          answer[1] += 1;
        } else {
          return true;
        }
      })
      .join("");

    // 이진 변환 (조건 2번)
    s = noZero.length.toString(2);

    // 이진 변환 횟수
    answer[0] += 1;
  }

  return answer;
}

// 테스트 케이스
const test = ["110010101001", "01110", "1111111"];
const testResult = [
  [3, 8],
  [3, 3],
  [4, 1],
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
