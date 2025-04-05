# Knight Travails

Implementation of an algorithm that finds the shortest path for a chess knight between [x,y] starting and [x,y] ending position by applying a Depth First Search algorithm and graph. 

At first i was inclined to use Dijkstra's algorithm but in an unweighted graph where each edges have no value and each step is equal to 1 we can simplify the process by using DFS since we will explore all the available nodes first at a given depth before moving on to the next depth so if we find the ending position at the current depth then there is no need to continue since that will be the shortest path for the knight as depth increases so is the amount of steps it will take to reach the ending position.