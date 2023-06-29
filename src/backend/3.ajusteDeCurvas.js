import Table from "cli-table";

function leastSquares(xValues, yValues) {
    let n = xValues.length;
    let table = new Table({
        head: ['x', 'y', 'xy', 'x^2'],
        colWidths: [10, 10, 10, 10]
    });
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    for (let i = 0; i < n; i++) {
        let x = xValues[i];
        let y = yValues[i];
        let xy = x * y;
        let x2 = x * x;
        sumX += x;
        sumY += y;
        sumXY += xy;
        sumX2 += x2;
        table.push([x, y, xy, x2]);
    }
    console.log(table.toString());
    let a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    let b = (sumY - a * sumX) / n;
    console.log(`y = ${a.toFixed(4)}x + ${b.toFixed(4)}`);
}

// Example usage
let xValues = [1, 2, 3];
let yValues = [1.2, 1.9, 3.1];

leastSquares(xValues, yValues);
