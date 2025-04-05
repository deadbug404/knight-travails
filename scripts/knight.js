class Knight{
    constructor(){
        this.knightMoveOffsets = [[2,1],[1,2],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]];
    }

    knightMoves(start,end){
        let queue = [[...start,0,[start]]];
        let visited = new Set();
        visited.add(`${start[0]},${start[1]}`)
    
        while(queue.length > 0){
            let [x,y,move,path] = queue.shift();
            if(x === end[0] && y === end[1]){return path}
    
            for(let [offX, offY] of this.knightMoveOffsets){
                let currX = x + offX
                let currY = y + offY
                if(this.isValid(currX,currY)){
                    let key = `${currX},${currY}`;
    
                    if(!visited.has(key)){
                        visited.add(key);
                        queue.push([currX,currY,move+1,[...path,[currX,currY]]]);
                    }
                }
            }
        }
        return []
    }

    isValid(x, y){return x >= 0 && x < 8 && y >= 0 && y < 8};
}

export {Knight}