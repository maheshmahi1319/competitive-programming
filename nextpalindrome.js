
// Javascript program for the above approach

	// Function to check whether number is palindrome or not
	function isPalindrome(num)
	{
	
		// Declaring variables
		let n, k, rev = 0;
	
		// storing num in n so that we can compare it later
		n = num;
	
		// while num is not 0 we find its reverse and store
		// in rev
		while (num != 0) {
			k = num % 10;
			rev = (rev * 10) + k;
			num = Math.floor(num / 10);
		}
	
		// check if num and its reverse are same
		if (n == rev) {
			return 1;
		}
		else {
			return 0;
		}
	}

// Driver Code

	// Take any number to find its next palindrome
		// number
		let num = 9687;
	console.log(isPalindrome(num))
		// If number is not Palindrome we go to the next
		// number using while loop
		// while (isPalindrome(num) == 0) {
		// 	num = num + 1;
		// }
	
		// now we get the next Palindrome so let's print it
		// document.write("Next Palindrome :");
		// document.write(num);

// This code is contributed by splevel62.
