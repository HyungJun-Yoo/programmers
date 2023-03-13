// 2019 카카오 개발자 겨울 인턴십
// https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
  var answer = 0;
  const stack = [];

  // 바구니에 담는 코드
  for (let i = 0; i < moves.length; i++) {
    let row = board.length;
    let col = moves[i] - 1;

    for (let r = 0; r < row; r++) {
      if (board[r][col] === 0) continue;
      else {
        stack.push(board[r][col]);
        board[r][col] = 0;
        break;
      }
    }
  }

  // 바구니에서 사라진 인형의 개수를 구하는 코드
  let count = 0;
  let index = 0;
  while (true) {
    if (count === stack.length) {
      break;
    }

    if (stack[index] === stack[index + 1]) {
      stack.splice(index, 2);
      answer += 2;
      count = 0;
      index = 0;
    } else {
      count++;
      index++;
    }
  }

  return answer;
}

// 테스트 케이스
const test_board = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
];
const test_moves = [[1, 5, 3, 5, 1, 2, 1, 4]];
const testResult = [4];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_board[i], test_moves[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
