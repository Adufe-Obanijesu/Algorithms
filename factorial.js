// Function to find the factorial of number n
function factorial(n) {
	let result = 1;
	for (let i=1; i<=n; i++) {
		result *= i;
	}

	return result;
}

// Big-O notation -> O(n);

factorial(4) // Result 24
factorial(6) // Result 720