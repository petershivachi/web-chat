import React from "react";
import ReactDOM from "react-dom";
import Chart from "./Chart";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";

const App = () => <Chart/>;

ReactDOM.render(<App />, document.getElementById("app"));
