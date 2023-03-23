// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/155652?language=javascript

function solution(s, skip, index) {
  var answer = "";
  const last = "z".charCodeAt();
  skip = skip.split("").map((v) => v.charCodeAt());

  for (let i = 0; i < s.length; i++) {
    // 알파벳을 이동할때 카운트할 변수 newIndex선언
    let newIndex = index;
    let asc = s[i].charCodeAt();

    for (let jump = 0; jump < newIndex; jump++) {
      // 알파벳이 z일경우 -26(알파벳 개수)
      if (asc === last) {
        asc -= 26;
      }

      // 알파벳 뒤로 한칸 이동
      asc++;

      // 만약 이동한 알파벳이 skip에 포함되어 있을 경우 한 번 더 반복
      skip.includes(asc) && newIndex++;
    }

    answer += String.fromCharCode(asc);
  }

  return answer;
}

// 테스트 케이스
const test_s = ["aukks"];
const test_skip = ["wbqd"];
const test_index = [5];
const testResult = ["happy"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_s[i], test_skip[i], test_index[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(s, skip, index) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                    "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
  return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}
*/
