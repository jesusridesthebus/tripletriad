# _Triple Triad_

A clone of the strategy game from Final Fantasy VIII, Triple Triad.

#### By
Jared Farkas, Darrion Gering, Liz Kelley

Special thanks to Ryan McLean for help on the card assets

## Description

The game starts with two players and each player has five cards to play with. There are 32 cards in total. For each game, the computer chooses 5 random cards for each player. Each card has four numbers on it. The number that is closest to the number on the adjacent card will be pitted against each other. If the number on the card is greater than the other card's number, the player now owns both cards. The player with the most cards at the end of the game wins.

## Setup/Installation Requirements

* Clone the project from https://github.com/j-farkas/triple-triad
* Run in browser
* Start a new game

## Known Bugs
Multiple sudden deaths will break the game.

## Specs
_A player drags a card onto the board / The card's image is appended to the space dragged to_

_A player clicks a card, then clicks a spot on the board / The card's image is appended to the space clicked_

_A player places a card adjacent to a card with a lower number than the card's number / The previously placed card is captured by the player_

_A player places a card adjacent to a card with a higher number than the card's number / Nothing happens_

_A player places a card adjacent to a card with the same number as the card's number / Nothing happens_

_A game ends in a tie and sudden death is toggled / Cards are re-dealt to each player based on which were captured. The red player will move first now_



## Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript
* Jquery

### License
This software is licensed under the MIT license

Copyright (c) 2019 **_Jared Farkas, Darrion Gering, Liz Kelley_**
