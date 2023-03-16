// 2022 KAKAO TECH INTERNSHIP
// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

function solution(survey, choices) {
  var answer = "";

  const types = ["RT", "CF", "JM", "AN"];
  const personalityType = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  for (let i = 0; i < choices.length; i++) {
    // 성격 유형 (RT, CF, JM, AN) 번호
    let type = types.indexOf(survey[i].split("").sort().join(""));

    // 첫 번째 성격 유형
    let first = survey[i].split("")[0];
    // 두 번째 성격 유형
    let second = survey[i].split("")[1];

    if (choices[i] === 1) personalityType[type][`${first}`] += 3;
    else if (choices[i] === 2) personalityType[type][`${first}`] += 2;
    else if (choices[i] === 3) personalityType[type][`${first}`] += 1;
    else if (choices[i] === 5) personalityType[type][`${second}`] += 1;
    else if (choices[i] === 6) personalityType[type][`${second}`] += 2;
    else if (choices[i] === 7) personalityType[type][`${second}`] += 3;
  }

  for (let i = 0; i < personalityType.length; i++) {
    const keys = Object.keys(personalityType[i]);
    answer +=
      personalityType[i][`${keys[0]}`] >= personalityType[i][`${keys[1]}`]
        ? keys[0]
        : keys[1];
  }

  return answer;
}

// 테스트 케이스
const test_survey = [
  ["AN", "CF", "MJ", "RT", "NA"],
  ["TR", "RT", "TR"],
];
const test_choices = [
  [5, 3, 2, 7, 5],
  [7, 1, 3],
];
const testResult = ["TCMA", "RCJA"];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_survey[i], test_choices[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(survey, choices) {
  var answer = "";
  let indi = new Map();
  ["R", "T", "C", "F", "J", "M", "A", "N"].forEach((item) => indi.set(item, 0));

  choices.forEach((item, index) => {
    let [A, B] = survey[index].split("");
    if (item > 4) indi.set(B, indi.get(B) + item - 4);
    else if (item < 4) indi.set(A, indi.get(A) + 4 - item);
  });
  answer += indi.get("R") >= indi.get("T") ? "R" : "T";
  answer += indi.get("C") >= indi.get("F") ? "C" : "F";
  answer += indi.get("J") >= indi.get("M") ? "J" : "M";
  answer += indi.get("A") >= indi.get("N") ? "A" : "N";
  return answer;
}
*/
