import React from "react";

import { sum, sub, mul, div } from "./Calc";

function Calculation() {
  return (
    <div>
      <ul>
        <li>Addition of two number is {sum(2, 3)}</li>
        <li>Substraction of two number is {sub(20, 5)}</li>
        <li>Multiplication of two number is {mul(5, 10)}</li>
        <li>Division of two number is {div(10, 3)}</li>
      </ul>
    </div>
  );
}

export default Calculation;
