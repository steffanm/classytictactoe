const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Game {
  player = "X";
  ticktacktoe = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  constructor() {
    this.printBoard();
    this.defaultPlayer();
  }

  defaultPlayer() {
    rl.question(
      "Default player is X, Do you want to change it, y or n ",
      function (defaultOrChoose) {
        let choice = defaultOrChoose.toLowerCase();
        if (choice == "y") {
          this.setPlayer();
        } else if (choice === "n") {
          console.log(`Starting player is X`);
          this.printBoard();
          playTickTacToe();
        } else {
          this.defaultPlayer();
        }
      }
    );
  }
  playTickTacToe() {
    let continePlay = false;
    for (i = 0; i < this.ticktacktoe.length; i++) {
      if (this.ticktacktoe[i] === " ") {
        continePlay = true;
      }
    }

    if (continePlay === true) {
      rl.question("Play Game ? ", function (movve) {
        this.gameplayer(movve);
      });
    }
  }

  gameplayer(move) {
    let moveToCheck = parseInt(move) - 1;
    // let i;
    for (let i = 0; i < this.ticktacktoe.length; i++) {
      if (moveToCheck == i && this.ticktacktoe[i] === " ") {
        this.ticktacktoe[i] = this.player;
        if (this.player === "X") {
          this.player = "O";
        } else if (this.player === "O") {
          this.player = "X";
        }
      } else {
        this.playTickTacToe();
      }
    }
  }

  calculateWinner() {
    if (
      this.ticktacktoe[0] == this.ticktacktoe[1] &&
      this.ticktacktoe[0] == this.ticktacktoe[2]
    ) {
      return this.ticktacktoe[0];
    } else if (
      this.ticktacktoe[3] == this.ticktacktoe[4] &&
      this.ticktacktoe[3] == this.ticktacktoe[5]
    ) {
      return this.ticktacktoe[3];
    } else if (
      this.ticktacktoe[6] == this.ticktacktoe[7] &&
      this.ticktacktoe[6] == this.ticktacktoe[8]
    ) {
      return this.ticktacktoe[6];
    } else if (
      this.ticktacktoe[0] == this.ticktacktoe[3] &&
      this.ticktacktoe[0] == this.ticktacktoe[6]
    ) {
      return this.ticktacktoe[0];
    } else if (
      this.ticktacktoe[1] == this.ticktacktoe[4] &&
      this.ticktacktoe[1] == this.ticktacktoe[7]
    ) {
      return this.ticktacktoe[1];
    } else if (
      this.ticktacktoe[2] == this.ticktacktoe[5] &&
      this.ticktacktoe[2] == this.ticktacktoe[8]
    ) {
      return (winner = this.ticktacktoe[2]);
    } else if (
      this.ticktacktoe[0] == this.ticktacktoe[4] &&
      this.ticktacktoe[0] == this.ticktacktoe[8]
    ) {
      return this.ticktacktoe[0];
    } else if (
      this.ticktacktoe[2] == this.ticktacktoe[4] &&
      this.ticktacktoe[2] == this.ticktacktoe[6]
    ) {
      return this.ticktacktoe[2];
    }

    return " ";
  }

  playTickTacToe() {
    let continePlay = false;
    for (let i = 0; i < this.ticktacktoe.length; i++) {
      if (this.ticktacktoe[i] === " ") {
        continePlay = true;
      }
    }

    if (continePlay === true) {
      rl.question("Play Game ? ", (movve) => {
        this.gameplayer(movve);
      });
    }
  }

  gameplayer(move) {
    let moveToCheck = parseInt(move) - 1;

    for (let i = 0; i < this.ticktacktoe.length; i++) {
      if (moveToCheck == i && this.ticktacktoe[i] === " ") {
        this.ticktacktoe[i] = this.player;
        if (this.player === "X") {
          this.player = "O";
        } else if (this.player === "O") {
          this.player = "X";
        }
      } else {
        this.playTickTacToe();
      }
    }
  }

  printBoard() {
    let line = "";
    for (let i = 1; i < 10; i++) {
      line += this.ticktacktoe[i - 1] + " | ";

      if (i % 3 === 0) {
        console.log(line);
        console.log("____________");
        line = "";
      }
    }
  }
  gameplayer(move) {
    let moveToCheck = parseInt(move) - 1;
    for (let i = 0; i < this.ticktacktoe.length; i++) {
      if (moveToCheck == i && this.ticktacktoe[i] === " ") {
        this.ticktacktoe[i] = this.player;
        if (this.player === "X") {
          this.player = "O";
        } else if (this.player === "O") {
          this.player = "X";
        }
      } else {
        this.playTickTacToe();
      }
    }

    console.log("\n");
    this.printBoard();
    const winner = this.calculateWinner();
    if (winner != " ") {
      console.log(`Winner is ${winner}`);
      process.exit(0);
    }
    this.playTickTacToe();
  }
  defaultPlayer() {
    rl.question(
      "Default player is X, Do you want to change it, y or n ",
      (defaultOrChoose) => {
        let choice = defaultOrChoose.toLowerCase();
        if (choice == "y") {
          this.setPlayer();
        } else if (choice === "n") {
          console.log(`Starting player is X`);
          this.printBoard();
          this.playTickTacToe();
        } else {
          this.defaultPlayer();
        }
      }
    );
  }
}
const x = new Game();
