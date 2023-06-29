import * as math from "mathjs";
import Table from "cli-table";

function bisectionMethod(f, interval, maxIterations, tolerance) {
    let [a, b] = interval;
    let table = new Table({
        head: ['Iteration', 'a', 'b', 'x', 'f(a)', 'f(b)', 'f(x)'],
        colWidths: [10, 10, 10, 10, 10, 10, 10]
    });
    let i = 0;
    let x;
    do {
        x = (a + b) / 2;
        let fa = f.evaluate({x: a});
        let fb = f.evaluate({x: b});
        let fx = f.evaluate({x: x});
        table.push([i, a.toFixed(4), b.toFixed(4), x.toFixed(4), fa.toFixed(4), fb.toFixed(4), fx.toFixed(4)]);
        if (math.sign(fx) === math.sign(fa)) {
            a = x;
        } else {
            b = x;
        }
        i++;
    } while (Math.abs(b - a) > tolerance && i < maxIterations);
    console.log(table.toString());
}

// Example usage
const f = math.parse('x^2');

bisectionMethod(f, [0, 1], 100, 0.1);
