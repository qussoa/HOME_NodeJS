import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import PlusMain_04 from "./plusNumber/PlusMain_04";
import LayoutMain_01 from "./layout/LayoutMain_01";
import * as serviceWorker from "./serviceWorker";

//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<PlusMain name="PlusMain" />, document.getElementById("root"));
// ReactDOM.render(
//   <PlusMain_01 name="PlusMain" />,
//   document.getElementById("root")
// );
//ReactDOM.render( <PlusMain_03 name="PlusMain" />,  document.getElementById("root"));
//ReactDOM.render( <PlusMain_04 name="PlusMain" />,  document.getElementById("root"));
ReactDOM.render(
  <LayoutMain_01 name="PlusMain" />,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
