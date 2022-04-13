# 2048

2048 is an addition based puzzle game

## Objective

the goal of this game is to combine matching tiles to reach the 2048 tile

## Gameplay

Use the directional keys to slide available tiles in a chosen direction. If the tiles are able to move in that direction, all tiles will shift accordingly. If there are two tiles with equal values sitting directly next to eachother, they will merge into a single tile containing the sum of the two. Upon a successful slide or merger, the board will generate a new tile on a random square. This new tile will contain either a 2 or a 4. Continue combining and sliding tiles until you reach 2048.

## Visual

This is how the game begins

![Screen Shot 2022-04-12 at 3 37 32 PM](https://user-images.githubusercontent.com/101018068/163042300-c32265db-bcc7-49eb-b794-70c5032d3199.png)

This is an example of how the game looks directly before a win

![Screen Shot 2022-04-13 at 9 00 28 AM](https://user-images.githubusercontent.com/101018068/163186074-f79ce23b-9320-42b6-b675-b5c9ad080a1f.png)

This is how the game looks in a losing position, there are no more possible moves and the game will end on the next keystroke

![Screen Shot 2022-04-13 at 9 05 14 AM](https://user-images.githubusercontent.com/101018068/163186484-89992c9f-4613-4854-9147-7281b51cf6fc.png)




## Technologies Used 

This game was built using HTML, CSS, JavaScript

## Playable Game

https://brendanfburke.github.io/brendan_burke_project_1/

## Code Snippet

``` 
if ((arr[a] > 0 && arr[a] === arr[b]) || (arr[a] > 0 && arr[a] === arr[c]) || (arr[a] > 0 && arr[a] === arr[d]) || (arr[b] > 0 && arr[b] === arr[c]) || (arr[b] > 0 && arr[b] === arr[d]) || (arr[c] > 0 && arr[c] === arr[d])) {
        validAddOne = true
        if (arr[d] === arr[c]) {
            arr[d] *= 2
            arr[c] = 0
        } else if (arr[c] === 0 && arr[d] === arr[b]) {
            arr[d] *=2
            arr[b] = 0
        } else if (arr[c] === 0 && arr[b] === 0 && arr[d] === arr[a]) {
            arr[d] *=2
            arr[a] = 0
        } 
        if (arr[c] === arr[b]) {
            arr[c] *= 2
            arr[b] = 0
        } else if (arr[b] === 0 && arr[c] === arr[a]) {
            arr[c] *=2
            arr[a] = 0
        } 
        if (arr[b] === arr[a]) {
            arr[b] *= 2
            arr[a] = 0
        }
```

### Phase 1

Phase one of this games development has concluded with a playable game, minimal styling, and limited bugs. The bugs do not effect gameplay, and will be snuffed out in phase 2.

### Phase 2

Phase 2 will begin with debugging. Once the game is fully debugged I will begin to work on stretch goals. Once stretch goals are complete I will attempt to refactor my code down into cleaner functions.

### Stretch Goals

- Score Board
- Sliding animations
- More thoughtful page design

