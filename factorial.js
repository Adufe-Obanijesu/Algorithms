// Function to find the factorial of number n
function factorial(n) {
	let result = 1;
	for (let i=1; i<=n; i++) {
		result *= i;
	}

	return result;
}

// Big-O notation -> O(n);

console.log(factorial(4)) // Result 24
console.log(factorial(6)) // Result 720