# MapGameServer
A Game Server for the Map based game


### Documentation
- ReSTful API service for a Map based game.


#### Endpoints
| Endpoint | Description | Data Required | Method |
|---|---|---|---|---|
| /new | Will create a new game | Player 1 and Player 2 | POST |
| /connect | Will connect P2 to P1's game ID | room ID | POST |
| /update | Will update a player's position | Player position | POST |
| /close | Will close and end an existing game | Player 1 + 2 consent | POST |

#### Additional Information

/Update will check if you have completed all the checkpoints and automatically notify the players of the result.
/New will be called by player 1, player 2 will join by /connect, followed by room name (?) **TBD**
/Close is a form of administrative power that will force end the game if the players get bored. This will either be P1's choice or require both their consent.