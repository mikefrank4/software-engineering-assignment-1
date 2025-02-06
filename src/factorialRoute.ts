/*
import { Request, Response } from "express";
import factorial from "./factorial";

export default (req: Request, res: Response): void => {
  const { num } = req.params;
  const parsedNum = parseInt(num, 10);
  const value = factorial(parsedNum);

  if (value < 0) {
    res.send(`factorial(${parsedNum}) is undefined for negative integers`);
  } else {
    res.send(`factorial(${parsedNum}) is ${value}`);
  }
};
*/
import { Request, Response } from "express";

const factorialRoute = (req: Request, res: Response) => {
    const num = parseInt(req.params.num, 10);
    if (isNaN(num)) {
        return res.status(400).send("Invalid number");
    } else if (num < 0){
        res.send(`factorial(${num}) is undefined for negative integers`);
    }
    const factorial = (n: number): number => (n === 0 ? 1 : n * factorial(n - 1));
    res.send(`factorial(${num}) is ${factorial(num)}`);
};

export default factorialRoute;
