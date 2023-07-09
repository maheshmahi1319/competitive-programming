function isPalindrome(str){
	return typeof str === "string"
		? str.split("").reverse().join("") === str
		: "Value is not a type string";
}

console.log(isPalindrome(100))

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(checkPalindrome(100))

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    let left = 0;
    let right = cleanedStr.length - 1;
  
    while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
        return false; // Characters don't match, not a palindrome
      }
      left++;
      right--;
    }
  
    return true; // All characters match, it's a palindrome
  }
  
  // Example usage:
  const string1 = "level";
  console.log(isPalindrome(string1)); // Output: true
  
  const string2 = "Hello";
  console.log(isPalindrome(string2)); // Output: false
  