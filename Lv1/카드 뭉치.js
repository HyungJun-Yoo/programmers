// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript

function solution(cards1, cards2, goal) {
  var answer = "Yes";

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
    } else {
      answer = "No";
      break;
    }
  }

  return answer;
}

// 테스트 케이스
const test_cards1 = [
  ["i", "drink", "water"],
  ["i", "water", "drink"],
];
const test_cards2 = [
  ["want", "to"],
  ["want", "to"],
];
const test_goal = [
  ["i", "want", "to", "drink", "water"],
  ["i", "want", "to", "drink", "water"],
];
const testResult = ["Yes", "No"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_cards1[i], test_cards2[i], test_goal[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
