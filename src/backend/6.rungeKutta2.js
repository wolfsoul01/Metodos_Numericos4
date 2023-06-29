import Table from "cli-table";

function rungeKutta2(f, x0, y0, h, n) {
    let table = new Table({
        head: ['i', 'x[i]', 'y[i]', 'k1', 'k2', 'y[i+1]'],
        colWidths: [10, 10, 10, 10, 10, 10]
    });
    let x = x0;
    let y = y0;
    for (let i = 0; i < n; i++) {
        let k1 = f(x, y);
        let k2 = f(x + h, y + h * k1);
        let yNew = y + (h / 2) * (k1 + k2);
        table.push([i, x.toFixed(4), y.toFixed(4), k1.toFixed(4), k2.toFixed(4), yNew.toFixed(4)]);
        y = yNew;
        x += h;
    }
    console.log(table.toString());
}

// Example usage
let f = (x, y) => y - x * x + 1;

rungeKutta2(f, 0, 0.5, 0.1, 10);
