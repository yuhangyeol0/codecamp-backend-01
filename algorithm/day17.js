//최대공약수 최소공배수

function solution(n, m) {
  //   let max = 0;
  //   for (let i = 1; i <= m; i++) {
  //     if (n % i === 0 && m % i === 0) {
  //       max = i;
  //     }
  //   }
  //   let min = 0;
  //   for (let i = m; i <= n * m; i += m) {
  //     if (i % n === 0) {
  //       min = i;
  //       break;
  //     }
  //   }
  //   return [max, min];

  //유클리드호재법
  //a를 b로 나눴을 때 나머지값이 0이 되면 작은 수가 최대공약수가 된다
  //0이되지 않는다면 작은수가 큰수가 되고 나머지 값이 작은 수가 된다.
  //다시 나누는 과정을 반복해서 나머지 값이 0이 나오면 작은 수가 최대공약수가 된다
  let a = m;
  let b = n;
  let r = 0;

  while (a % b > 0) {
    a = b;
    r = a % b;
    b = r;
  }
  //최소공배수:n*m에 최대공약수를 나눠준 값
  return [b, (n * m) / b];
}
