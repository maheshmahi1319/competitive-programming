
// // Javascript program for the above approach

// 	// Function to check whether number is palindrome or not
// 	function isPalindrome(num)
// 	{
	
// 		// Declaring variables
// 		let n, k, rev = 0;
	
// 		// storing num in n so that we can compare it later
// 		n = num;
	
// 		// while num is not 0 we find its reverse and store
// 		// in rev
// 		while (num != 0) {
// 			k = num % 10;
// 			rev = (rev * 10) + k;
// 			num = Math.floor(num / 10);
// 		}
	
// 		// check if num and its reverse are same
// 		if (n == rev) {
// 			return 1;
// 		}
// 		else {
// 			return 0;
// 		}
// 	}

// // Driver Code

// 	// Take any number to find its next palindrome
// 		// number
// 		let num = 9687;
// 	console.log(isPalindrome(num))
// 		// If number is not Palindrome we go to the next
// 		// number using while loop
// 		// while (isPalindrome(num) == 0) {
// 		// 	num = num + 1;
// 		// }
	
// 		// now we get the next Palindrome so let's print it
// 		// document.write("Next Palindrome :");
// 		// document.write(num);

// // This code is contributed by splevel62.


function reverse(nums) {
    var reverse = "";
    for (var i = String(nums).length - 1; i >= 0; i--) {
      reverse += String(nums)[i];
    }
    return reverse;
  }
  
  function Palindrome(num) {
    if (String(num).length < 2) {
      return num + 1
    }
  
    for (var i = num + 1; ; i++) {
      if (String(i) === reverse(i)) {
        return i
      }
    }
  }
  
  console.log(Palindrome(23))