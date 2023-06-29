import Table from "cli-table";

function jacobiMethod(A, b, x0, maxIterations, tolerance) {
    let n = A.length;
    let x = [...x0];
    let table = new Table({
        head: ['Iteration', ...x.map((_, i) => `x[${i}]`)],
        colWidths: [10, ...x.map(() => 10)]
    });
    for (let k = 0; k < maxIterations; k++) {
        let xNew = [...x];
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    sum += A[i][j] * x[j];
                }
            }
            xNew[i] = (b[i] - sum) / A[i][i];
        }
        table.push([k, ...xNew.map(v => v.toFixed(4))]);
        let error = Math.max(...xNew.map((v, i) => Math.abs(v - x[i])));
        if (error < tolerance) {
            break;
        }
        x = xNew;
    }
    console.log(table.toString());
    return x;
}

// Example usage
let A = [
    [4, -1, -1],
    [-2, 6, 1],
    [-1, 1, 7]
];
let b = [3, 9, -6];
let x0 = [0, 0, 0];

jacobiMethod(A, b, x0, 100, 1e-4);
