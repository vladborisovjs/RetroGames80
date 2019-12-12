import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors-spock-lizard',
  templateUrl: './rock-paper-scissors-spock-lizard.component.html',
  styleUrls: ['./rock-paper-scissors-spock-lizard.component.scss']
})
export class RockPaperScissorsSpockLizardComponent implements OnInit {
  userPoint: number = 0;
  computerPoint: number = 0;
  userVictories: number = 0;
  computerVictories: number = 0;
  userScore: any;
  computerScore: any;
  scoreBoard: any;
  result: any;
  rock: any;
  paper: any;
  scissors: any;
  spock: any;
  lizard: any;
  constructor() { }

  ngOnInit() {
    this.userScore = document.getElementById("user-score");
    this.computerScore = document.getElementById("computer-score");
    this.scoreBoard = document.querySelector(".score-board");
    this.result = document.querySelector(".result > p");
    this.rock = document.getElementById("rock");
    this.paper = document.getElementById("paper");
    this.scissors = document.getElementById("scissors");
    this.spock = document.getElementById("spock");
    this.lizard = document.getElementById("lizard");
    this.createIconsListener();
  }

  getComputerChoice() {
    const choices = ["rock","paper","scissors","spoke","lizard"];
    const randomNumber = Math.floor(Math.random() * 5);

    return choices[randomNumber];
  }

  showWin(userChoice) {
    this.userPoint++;
    this.userScore.innerHTML = this.userPoint;
    this.result.innerHTML = "USER WIN ROUND";

    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(
      () => document.getElementById(userChoice).classList.remove("green-glow")
      , 1000);
  }

  showLose(userChoice) {
    this.computerPoint++;
    this.computerScore.innerHTML = this.computerPoint;
    this.result.innerHTML = "COMPUTER WIN ROUND";

    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(
      () => document.getElementById(userChoice).classList.remove("red-glow")
      , 1000);
  }

  showDraw(userChoice) {
    this.result.innerHTML = "DRAW ROUND";

    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(
      () => document.getElementById(userChoice).classList.remove("gray-glow")
      , 1000);
  }

  createGameMatch() {
    if (this.userPoint == 16 && this.computerPoint != 16) {
      ++this.userVictories;

      if (this.userVictories == 1) {
        document.getElementById("matchUser1").classList.add("winMatch");
        document.querySelector(".result > p").classList.add("winMatch");
      } else if (this.userVictories == 2) {
        document.getElementById("matchUser2").classList.add("winMatch");
        document.querySelector(".result > p").classList.add("winMatch");
      } else if (this.userVictories == 3) {
        document.getElementById("matchUser3").classList.add("winMatch");
      }

      this.result.innerHTML = "USER WIN MATCH";
      setTimeout(() => this.resetScoreBoard(), 1000);
      setTimeout(() => this.sleep(1000), 1);
      console.log(`userVictories: ${this.userVictories}`);
    } else if (this.userPoint != 16 && this.computerPoint == 16) {
      ++this.computerVictories;

      if (this.computerVictories == 1) {
        document.getElementById("matchComputer1").classList.add("winMatch");
        document.querySelector(".result > p").classList.add("loseMatch");
      } else if (this.computerVictories == 2) {
        document.getElementById("matchComputer2").classList.add("winMatch");
        document.querySelector(".result > p").classList.add("loseMatch");
      } else if (this.computerVictories == 3) {
        document.getElementById("matchComputer3").classList.add("winMatch");
      }

      this.result.innerHTML = "COMPUTER WIN MATCH";
      setTimeout(() => this.resetScoreBoard(), 1000);
      setTimeout(() => this.sleep(1000), 1);
      console.log(`computerVictories: ${this.computerVictories}`);
    }
  }

  createEndGame() {
    if (this.userVictories == 3 || this.computerVictories == 3) {
      document.querySelector(".result > p").classList.add("winGame");

      if (this.userVictories == 3 && this.computerVictories != 3) {
        this.result.innerHTML = "USER WIN GAME";
        console.log("USER WIN GAME");
      } else if (this.userVictories != 3 && this.computerVictories == 3) {
        this.result.innerHTML = "COMPUTER WIN GAME";
        console.log("COMPUTER WIN GAME");
      }

      setTimeout(() => this.newGame(), 1000);
    }
  }

  resetScoreBoard() {
    this.computerScore.innerHTML = 0;
    this.userScore.innerHTML = 0;
    this.userPoint = 0;
    this.computerPoint = 0;
    this.result.innerHTML = "";

    document.querySelector(".result > p").classList.remove("winMatch","loseMatch","winGame");
  }

  newGame() {
    let elements = document.getElementsByClassName('winMatch');

    while (elements.length > 0) {
      elements[0].classList.remove('winMatch');
    }

    this.resetScoreBoard();
    setTimeout(() => this.sleep(1000), 1);

    this.userVictories = 0;
    this.computerVictories = 0;
  }

  createGameStrategy(userChoice) {
    const computerChoice = this.getComputerChoice();

    switch (userChoice + computerChoice) {
      case "rockscissors":
      case "rocklizard":
      case "paperrock":
      case "paperspock":
      case "lizardpaper":
      case "lizardspock":
      case "spockscissors":
      case "spokerock":
      case "scissorspaper":
      case "scissorslizard":
        console.log(`user choice => ${userChoice}`);
        console.log(`computer choice => ${computerChoice}`);
        console.log("USER WIN");
        this.showWin(userChoice);
        break;
      case "scissorsrock":
      case "lizardrock":
      case "rockpaper":
      case "spockpaper":
      case "paperlizard":
      case "spocklizard":
      case "scissorsspock":
      case "rockspoke":
      case "paperscissors":
      case "lizardscissors":
        console.log(`user choice => ${userChoice}`);
        console.log(`computer choice => ${computerChoice}`);
        console.log("COMPUTER WIN");
        this.showLose(userChoice);
        break;
      case "scissorsscissors":
      case "rockrock":
      case "paperpaper":
      case "spockspock":
      case "lizardlizard":
        console.log(`user choice => ${userChoice}`);
        console.log(`computer choice => ${computerChoice}`);
        console.log("DRAW");
        this.showDraw(userChoice);
        break;
    }

    this.createGameMatch();
    this.createEndGame();
  }

  createIconsListener() {
    this.rock.addEventListener("click", () => this.createGameStrategy("rock"));
    this.paper.addEventListener("click", () => this.createGameStrategy("paper"));
    this.scissors.addEventListener("click", () => this.createGameStrategy("scissors"));
    this.spock.addEventListener("click", () => this.createGameStrategy("spock"));
    this.lizard.addEventListener("click", () => this.createGameStrategy("lizard"));
  }

  sleep(ms) {
    ms += new Date().getTime();

    while (new Date() < ms){}
  }
}
