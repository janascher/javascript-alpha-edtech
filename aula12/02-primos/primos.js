document.querySelector("#button").addEventListener("click", primeNumber);

function primeNumber() {

    let primes = [];

    for (let number = 1; number <= 1000; number++) {

        let verify = 0;

        for (let count = 1; count <= number; count++) {

            if (number % count == 0) {
                verify++;

            };
        };

        if (verify == 2) {

            primes.push(number);
        };
    };

    console.log(primes)
    document.querySelector("#answer-primes").textContent = primes;
};