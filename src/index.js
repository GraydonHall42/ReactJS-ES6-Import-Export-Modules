import React from "react";
import ReactDOM from "react-dom";

//import method #1... import each function/constant seperately
import pi, { doublePi, triplePi, quadPi } from "./math.js";

//import method #2... import all, under one constant.
//we access methods and functions using the dot operator.
import * as pie from "./math.js";

ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>

    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
    <li>{quadPi}</li>

    <li>{pie.default}</li>
    <li>{pie.doublePi()}</li>
    <li>{pie.triplePi()}</li>
    <li>{pie.quadPi}</li>
  </ul>,
  document.getElementById("root")
);
