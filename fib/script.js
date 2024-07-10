function generateFibonacci() {
    const num = document.getElementById('num').value;
    const resultDiv = document.getElementById('result');

    if (num < 1) {
        resultDiv.innerHTML = 'Please enter a number greater than 0.';
        return;
    }

    let fibSeries = [];
    let a = 0, b = 1;

    for (let i = 0; i < num; i++) {
        fibSeries.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    resultDiv.innerHTML = `Fibonacci Series: ${fibSeries.join(', ')}`;
}
