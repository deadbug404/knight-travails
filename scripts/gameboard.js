import '../styles/gameboard.css';
import knightImgSrc from "../images/knight.png";
import { Knight } from './knight';

class Gameboard{
    constructor(){
        this.matrix = [[,,,,,,,],
                       [,,,,,,,],
                       [,,,,,,,],
                       [,,,,,,,],
                       [,,,,,,,],
                       [,,,,,,,],
                       [,,,,,,,],
                       [,,,,,,,]];
        this.knight = new Knight();
    }

    initialize(){
        let gameboard = document.querySelector("#gameboard");
        gameboard.textContent = "";
        let currColor = "white";

        for(let i = 7; i >= 0; i--){
            let row = document.createElement("div");
            row.classList.add("row");
            for(let j = 0; j <= 7; j++){
                let column = document.createElement("div");
                if(this.matrix[i][j] != undefined){
                    column.append(this.matrix[i][j])
                }
                column.classList.add("column");
                column.style.backgroundColor = currColor;
                (currColor == "white") ? currColor = "black" : currColor = "white";
                row.appendChild(column);
            }
            gameboard.appendChild(row);
            (currColor == "white") ? currColor = "black" : currColor = "white";
        }
    }

    moveKnight(path){
        let knightImg = document.createElement("img");
        knightImg.classList.add("img");
        knightImg.src = knightImgSrc;
        path.forEach((element,index,arr) => {
            let circle = document.createElement("div");
            circle.classList.add("circle");
            if(index == arr.length-1){
                this.matrix[element[0]][element[1]] = knightImg;
            }else{
                this.matrix[element[0]][element[1]] = circle;
            }
        });
        this.initialize();
    }

    knightShortestPath(start,end){
        let path = this.knight.knightMoves(start,end);
        this.moveKnight(path);
        return path;
    }
}

export {Gameboard}