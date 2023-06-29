import Table from "cli-table";

function dividedDifferences(xValues, yValues) {
    let n = xValues.length;
    let table = new Table({
        head: ['i', ...xValues.map((_, i) => `f[${i}]`)],
        colWidths: [10, ...xValues.map(() => 10)]
    });
    let f = [...yValues];
    table.push([0, ...f.map(v => v.toFixed(4))]);
    for (let i = 1; i < n; i++) {
        for (let j = n - 1; j >= i; j--) {
            f[j] = (f[j] - f[j - 1]) / (xValues[j] - xValues[j - i]);
        }
        table.push([i, ...f.map(v => v.toFixed(4))]);
    }
    console.log(table.toString());
    return f;
}

function newtonInterpolation(xValues, yValues, x) {
    let n = xValues.length;
    let f = dividedDifferences(xValues, yValues);
    let result = f[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        result = result * (x - xValues[i]) + f[i];
    }
    console.log(`Result: ${result.toFixed(4)}`);
}

// Example usage
let xValues = [0, 1, 2];
let yValues = [1, 3, 2];
let x = 1.5;

newtonInterpolation(xValues, yValues, x);
