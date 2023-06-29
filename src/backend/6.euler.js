import Table from "cli-table";

function eulerMethod(f, x0, y0, h, n) {
    let table = new Table({
        head: ['i', 'x[i]', 'y[i]', 'f(x,y)', 'h*f(x,y)', 'y[i+1]'],
        colWidths: [10, 10, 10, 10, 10, 10]
    });
    let x = x0;
    let y = y0;
    for (let i = 0; i < n; i++) {
        let fy = f(x, y);
        let hf = h * fy;
        let yNew = y + hf;
        table.push([i, x.toFixed(4), y.toFixed(4), fy.toFixed(4), hf.toFixed(4), yNew.toFixed(4)]);
        y = yNew;
        x += h;
    }
    console.log(table.toString());
}

// Example usage
let f = (x, y) => y - x * x + 1;

eulerMethod(f, 0, 0.5, 0.1, 10);
