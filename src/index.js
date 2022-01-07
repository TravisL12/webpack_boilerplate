import { helloElement } from "./scripts/application";
import "./styles/styles.scss";

const root = document.getElementById("root");
root.appendChild(helloElement());
