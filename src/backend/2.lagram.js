import Table from "cli-table";

function lagrangeInterpolation(xValues, yValues, x) {
    let n = xValues.length;
    let table = new Table({
        head: ['Iteration', 'i', 'x[i]', 'y[i]', 'L[i]', 'P'],
        colWidths: [10, 10, 10, 10, 10, 10]
    });
    let P = 0;
    for (let i = 0; i < n; i++) {
        let L = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                L *= (x - xValues[j]) / (xValues[i] - xValues[j]);
            }
        }
        P += L * yValues[i];
        table.push([i + 1, i, xValues[i], yValues[i], L.toFixed(4), P.toFixed(4)]);
    }
    console.log(table.toString());
    return P;
}

// Example usage
let xValues = [0, 1, 2];
let yValues = [1, 3, 2];
let x = 1.5;

lagrangeInterpolation(xValues, yValues, x);
