// 2018 KAKAO BLIND RECRUITMENT
// https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    // padStart() => 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
    let map_1 = arr1[i].toString(2).padStart(n, "0").split("");
    let map_2 = arr2[i].toString(2).padStart(n, "0").split("");
    let str = "";

    map_1.forEach((value, index) => {
      if (value === "1" || map_2[index] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    });

    answer.push(str);
  }

  return answer;
}

// 테스트 케이스
const test_n = [5, 6];
const test_arr1 = [
  [9, 20, 28, 18, 11],
  [46, 33, 33, 22, 31, 50],
];
const test_arr2 = [
  [30, 1, 21, 17, 28],
  [27, 56, 19, 14, 14, 10],
];
const testResult = [
  ["#####", "# # #", "### #", "#  ##", "#####"],
  ["######", "###  #", "##  ##", " #### ", " #####", "### # "],
];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_n[i], test_arr1[i], test_arr2[i]);

  if (result.toString() === testResult[i].toString()) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}

// 인상 깊었던 다른 사람의 풀이

/*
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
*/
