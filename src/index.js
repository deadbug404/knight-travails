import '../styles/index.css';
import { Gameboard } from "../scripts/gameboard";
import { submit } from '../scripts/events';

let gameboard = new Gameboard();
gameboard.initialize();

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", e => submit(e));