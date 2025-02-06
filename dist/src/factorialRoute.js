"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factorialRoute = (req, res) => {
    const num = parseInt(req.params.num, 10);
    if (isNaN(num)) {
        return res.status(400).send("Invalid number");
    }
    else if (num < 0) {
        res.send(`factorial(${num}) is undefined for negative integers`);
    }
    const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
    res.send(`factorial(${num}) is ${factorial(num)}`);
};
exports.default = factorialRoute;
//# sourceMappingURL=factorialRoute.js.map