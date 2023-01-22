// 연습문제
// https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript

const isPrime = (x, sosu) => {
  for (let i = 0; i < Math.ceil(Math.sqrt(x)); i++) {
    if (x % sosu[i] === 0 && x !== sosu[i]) {
      return false;
    }
  }

  return true;
};

function solution(n) {
  var answer = 0;
  let sosu = [2, 3, 5, 7];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i, sosu) === true) {
      sosu.push(i);
      answer++;
    }
  }

  return answer;
}

// 테스트 케이스
const test = [10, 5];
const testResult = [4, 3];

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
function solution(n){
  if(n==2) return 1;
  let i, j;
  let primes=[0,0];
  for (i = 2; i<=n; i++) primes[i]=1;
  for (i = 2; i<=n; i++){
      if(!primes[i]) continue;
      for(j = i*2; j<=n; j+=i) primes[j]=0;
  }
  return primes.reduce((acc,cur) => acc+cur);
}
*/
