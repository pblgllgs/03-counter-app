import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PrimeraApp from "./PrimeraApp";

//enlazamos el lugar donde queremos mostrar el mensaje
const divRoot = document.querySelector("#root");

//renderiazamos el mensaje en el lugar que queremos
ReactDOM.render(<PrimeraApp />, divRoot);
