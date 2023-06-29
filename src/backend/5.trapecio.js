import Table from "cli-table";

function trapezoidMethod(f, a, b, n) {
    let h = (b - a) / n;
    let table = new Table({
        head: ['i', 'x[i]', 'f(x[i])'],
        colWidths: [10, 10, 10]
    });
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        let x = a + i * h;
        let y = f(x);
        table.push([i, x.toFixed(4), y.toFixed(4)]);
        if (i === 0 || i === n) {
            sum += y;
        } else {
            sum += 2 * y;
        }
    }
    console.log(table.toString());
    let result = (h / 2) * sum;
    console.log(`Result: ${result.toFixed(4)}`);
}

// Example usage
let f = x => Math.sin(x);

trapezoidMethod(f, 0, Math.PI, 4);
