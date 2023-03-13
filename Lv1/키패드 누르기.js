// 2020 카카오 인턴십
// https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

function solution(numbers, hand) {
  var answer = "";

  // 왼손의 위치 (* = 10)
  let left_hand = 10;
  // 오른손의 위치 (# = 12)
  let right_hand = 12;

  let left_number = [1, 4, 7, 10];
  let right_number = [3, 6, 9, 12];
  let middle_number = [2, 5, 8, 11];

  numbers.forEach((number) => {
    if (left_number.includes(number)) {
      left_hand = number;
      answer += "L";
    } else if (right_number.includes(number)) {
      right_hand = number;
      answer += "R";
    } else {
      if (number === 0) number = 11;

      let L;
      let R;

      // 왼손이 좌측에 위치
      if (left_number.includes(left_hand)) {
        L =
          Math.abs(
            middle_number.indexOf(number) - left_number.indexOf(left_hand)
          ) + 1;
      }
      // 왼손이 가운데 위치
      else {
        L = Math.abs(
          middle_number.indexOf(left_hand) - middle_number.indexOf(number)
        );
      }

      // 오른손이 우측에 위치
      if (right_number.includes(right_hand)) {
        R =
          Math.abs(
            middle_number.indexOf(number) - right_number.indexOf(right_hand)
          ) + 1;
      }
      // 오른손이 가운데 위치
      else {
        R = Math.abs(
          middle_number.indexOf(right_hand) - middle_number.indexOf(number)
        );
      }

      // 왼손이 더 가까움
      if (L < R) {
        left_hand = number;
        answer += "L";
      }

      // 오른손이 더 가까움
      else if (L > R) {
        right_hand = number;
        answer += "R";
      }

      // 서로 같으면 주로 사용하는 손을 확인
      else {
        if (hand === "left") {
          left_hand = number;
          answer += "L";
        } else {
          right_hand = number;
          answer += "R";
        }
      }
    }
  });

  return answer;
}

// 테스트 케이스
const test_numbers = [
  [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
  [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
];
const test_hand = ["right", "left", "right"];
const testResult = ["LRLLLRLLRRL", "LRLLRRLLLRR", "LLRLLRLLRL"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_numbers[i], test_hand[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
