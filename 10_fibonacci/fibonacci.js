const fibonacci = function(n) {
    n = Number(n);

    if (n < 0 || isNaN(n))
    {
        return "OOPS";
    }

    if (n <= 1)
    {
        return n
    }

    return fibonacci(n - 2) + fibonacci(n - 1);
};

// Do not edit below this line
module.exports = fibonacci;
