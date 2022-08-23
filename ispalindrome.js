function isPalindrome(str){
	return typeof str === "string"
		? str.split("").reverse().join("") === str
		: "Value is not a type string";
}

console.log(isPalindrome(100))