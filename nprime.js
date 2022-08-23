function primeNumber(length) {

}

// first n prime numbers (divisble by: 1 and themselves only e.g. 2,3,5,7,11)
const prime = (n) => {
    let arr = [];
    for (let i = 2; arr.length < n; i++) {
      var flag = 0;
      for (let k = 2; k <= i; k++) {
        if (i % k == 0 && i > k) {
          flag = 1; //if i is divisible by any small number than it is not prime number
        } else if (i % k == 0 && flag != 1) {
          arr.push(i);
        }
      }
    }
    return arr;
  };
  console.log(prime(8));