// Q 소수판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// Answer
// 🙈 Oum 1 회독중 어려움
const prime = 11;
function primeFunc(n) {
  for(let i=2; i < n; i++) {
    if( n % i === 0) {
      console.log("소수가 아님");
      return false;
    }
  }
  if (n === 1) {
    console.log("no");
    return false;
  }
  console.log("소수입니다")
}
primeFunc(prime);
//sjshin