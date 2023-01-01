// 2021 카카오 채용연계형 인턴십
// https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

function solution(s) {
  var answer = "";

  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  var word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0) {
      answer += s[i];
    } else {
      word += s[i];

      let index = words.indexOf(word);
      if (index >= 0) {
        if (word.length === words[index].length) {
          answer += index;
          word = "";
        }
      }
    }
  }

  return Number(answer);
}

// 테스트 케이스
const test = ["one4seveneight", "23four5six7", "2three45sixseven", "123"];
const testResult = [1478, 234567, 234567, 123];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      answer = arr.join(i);
  }

  return Number(answer);
}
*/
