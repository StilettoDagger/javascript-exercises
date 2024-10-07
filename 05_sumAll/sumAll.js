const sumAll = function (num1, num2) {
	if (
		!Number.isInteger(num1) ||
		!Number.isInteger(num2)||
		num1 < 0 ||
		num2 < 0
	) {
		return "ERROR";
	}
	const lower = Math.min(num1, num2);
	const upper = Math.max(num1, num2);

	let sumResult = 0;

	for (let i = lower; i <= upper; i++) {
		sumResult += i;
	}

	return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
