// 위클리 챌린지
// https://school.programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

function solution(price, money, count) {
  // 이용 금액을 계산
  var sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  // 부족한 금액 반환
  return sum > money ? sum - money : 0;
}

// 테스트 케이스
const test_price = [3];
const test_money = [20];
const test_count = [4];
const testResult = [10];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_price[i], test_money[i], test_count[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
*/
