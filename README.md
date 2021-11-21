# Game of Dice - Multiplayer game

Problem statement
● Make dice game
○ Quick mode
■ When 4 players click on the quick mode button start the game between
those users. ○ Private mode
■ Create room code by one player and other player join game using this
room code

○ Dice outcomes from 1 to 6. ○ Each player has 30 seconds turn time. ○ If the player does not take a turn after that automatically take a turn from the
backend side and pass to the next player turn. ○ When players roll dice increases player score. Ex - If the player roll dice and get
5 so increase the player score by 5. ○ When the user score reached 61 or greater that player will declare a winner. Criteria
- Nodejs ES5 language
- Express framework
- MongoDB (Used as a persistent database)
- Redis (Used as a cache database)
- Socket.io
- Code quality
- Project structure
- Test cases if possible
- Regular git commits
- Minimum npm module
- Connect/Disconnect cases
- Scalability of code
- Any client-side language can use

**Requirements:**
* NodeJS 12.18.3
* Redis (Localhost:6379)
* MongoDB (I am using my Atlas cluster)

**To Run the Application:**
* **For dev:** npm run dev (This will need nodemon as a dev dependency)
* **For Prod:** npm run prod ( For utilizing all the cores of the processor, we are using cluster method and forking processes on every core of the processor)

**Flow of the Application:**
* Run the application => use `npm run dev` to start server
* Open `http://localhost:8081`
* Register few users or use existing dummy users (dummy1@gmail.com, dummy2@gmail.com, dummy3@gmail.com)
* Login using (dummy1@gmail.com, dummy2@gmail.com, dummy3@gmail.com)
* After login you will reach the game home screen. You will have 3 options here, "create room" or "join a game" or "quick play" to play with random players
* Once you click the Create Room button, you will get into the game lobby. Here you will also get a room ID which you can share with other players to join.
* The lobby will get updated if any other players join in your room.
* Once you press the Start Game Button, the game will start. 
* All the data is computed on the server and sent to the client.
* In quick play mode you can start & play game with random peoples



** Futher Improvements:**
* Some corner cases related to disconnection need to be handled 
* Code refactoring is needed in some of the  places
* Code could be more modular


