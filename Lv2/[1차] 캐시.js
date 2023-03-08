// 2018 KAKAO BLIND RECRUITMENT
// https://school.programmers.co.kr/learn/courses/30/lessons/17680?language=javascript

function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  if (cacheSize === 0) {
    // 캐시 크기가 0인 경우 (cache miss)
    return cities.length * 5;
  }

  for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i].toUpperCase();

    // cache에 cities[i]가 있는지 확인
    let index = cache.indexOf(cities[i]);

    if (index >= 0) {
      // cache에 들어있다면 (cache hit)
      cache.splice(index, 1);
      answer += 1;
    } else {
      // cache에 들어있지 않다면 (cache miss)
      answer += 5;
    }

    cache.push(cities[i]);

    // 캐시가 넘치는 경우 가장 오랫동안 참조되지 않은 페이지를 교체
    if (cache.length > cacheSize) {
      cache.shift();
    }
  }

  return answer;
}

// 테스트 케이스
const test_cacheSize = [3, 3, 2, 5, 2, 0];
const test_cities = [
  [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ],
  [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ],
  [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ],
  [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ],
  ["Jeju", "Pangyo", "NewYork", "newyork"],
  ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"],
];
const testResult = [50, 21, 60, 52, 16, 25];

// 실행
for (let i = 0; i < testResult.length; i++) {
  const result = solution(test_cacheSize[i], test_cities[i]);

  if (result === testResult[i]) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
