import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

//enlazamos el lugar donde queremos mostrar el mensaje
const divRoot = document.querySelector("#root");

//renderiazamos el mensaje en el lugar que queremos
//ReactDOM.render(<CounterApp value={1989} />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);

