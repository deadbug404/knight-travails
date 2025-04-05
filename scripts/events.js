import { Gameboard } from "./gameboard";

function submit(e){
    e.preventDefault();

    let gameboard = new Gameboard();
    gameboard.initialize();

    let start = document.querySelector("#start").value.split(",");
    let end = document.querySelector("#end").value.split(",");
    start = [parseInt(start[0]),parseInt(start[1])];
    end = [parseInt(end[0]),parseInt(end[1])];

    let shortestPath = gameboard.knightShortestPath(start,end);
    let fullPath = "";
    shortestPath.forEach((path,index,arr)=>{
        (index == arr.length-1) ? fullPath += `[${path}]` : fullPath += `[${path}] => `;
    })
    let fullPathDiv = document.querySelector("#fullPath");
    fullPathDiv.textContent = fullPath;
}

export {submit};