import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors-spock-lizard',
  templateUrl: './rock-paper-scissors-spock-lizard.component.html',
  styleUrls: ['./rock-paper-scissors-spock-lizard.component.scss']
})
export class RockPaperScissorsSpockLizardComponent implements OnInit {
  private userVictories: number;
  private computerVictories: number;
  private userScore: number;
  private computerScore: number;
  private result: string = '';
  private readonly userChoice: string = '';
  private readonly computerChoice: string = '';
  constructor() { }

  ngOnInit() {
    this.userVictories = localStorage.getItem('userVictoriesRPSSL') || 0;
    this.computerVictories = localStorage.getItem('computerVictoriesRPSSL') || 0;
    this.userScore = localStorage.getItem('userScoreRPSSL') || 0;
    this.computerScore = localStorage.getItem('computerScoreRPSSL') || 0;
  }

  getComputerChoice() {
    const choices = ["rock","paper","scissors","spock","lizard"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
  }

  showWin(userChoice) {
    this.userScore++;
    localStorage.setItem('userScoreRPSSL', this.userScore);
    this.result = "USER WIN ROUND";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(
      () => document.getElementById(userChoice).classList.remove("green-glow")
      , 1000);
  }

  showLose(userChoice) {
    this.computerScore++;
    localStorage.setItem('computerScoreRPSSL', this.computerScore);
    this.result = "COMPUTER WIN ROUND";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(
      () => document.getElementById(userChoice).classList.remove("red-glow")
      , 1000);
  }

  showDraw(userChoice) {
    this.result = "DRAW ROUND";
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(
      () => document.getElementById(userChoice).classList.remove("gray-glow")
      , 1000);
  }

  createGameMatch() {
    if (this.userScore === 16 || this.computerScore === 16) {
      localStorage.removeItem('userScoreRPSSL');
      localStorage.removeItem('computerScoreRPSSL');
      if (this.userScore === 16 && this.computerScore !== 16) {
        ++this.userVictories;
        localStorage.setItem('userVictoriesRPSSL', this.userVictories);
        this.result = "USER WIN MATCH";
        console.log(`userVictories: ${this.userVictories}`);
      } else if (this.userScore !== 16 && this.computerScore === 16) {
        ++this.computerVictories;
        localStorage.setItem('computerVictoriesRPSSL', this.computerVictories);
        this.result = "COMPUTER WIN MATCH";
        console.log(`computerVictories: ${this.computerVictories}`);
      }
      setTimeout(() => this.resetScoreBoard(), 1000);
      setTimeout(() => this.sleep(1000), 1);
    }
  }

  createEndGame() {
    if (this.userVictories === 3 || this.computerVictories === 3) {
      //document.querySelector(".result > p").classList.add("winGame");
      localStorage.removeItem('userVictoriesRPSSL');
      localStorage.removeItem('computerVictoriesRPSSL');
      if (this.userVictories === 3 && this.computerVictories !== 3) {
        this.result = "USER WIN GAME";
      } else if (this.userVictories !== 3 && this.computerVictories === 3) {
        this.result = "COMPUTER WIN GAME";
      }
      setTimeout(() => this.newGame(), 1000);
    }
  }

  resetScoreBoard() {
    this.computerScore = 0;
    this.userScore = 0;
    this.result = "";
  }

  newGame() {
    this.resetScoreBoard();
    setTimeout(() => this.sleep(1000), 1);
    this.userVictories = 0;
    this.computerVictories = 0;
  }

  createGameStrategy(userChoice) {
    this.computerChoice = this.getComputerChoice();
    this.userChoice = userChoice;
    switch (this.userChoice + this.computerChoice) {
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
        console.log(`user choice => ${this.userChoice}`);
        console.log(`computer choice => ${this.computerChoice}`);
        console.log("USER WIN");
        this.showWin(this.userChoice);
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
        console.log(`user choice => ${this.userChoice}`);
        console.log(`computer choice => ${this.computerChoice}`);
        console.log("COMPUTER WIN");
        this.showLose(this.userChoice);
        break;
      case "scissorsscissors":
      case "rockrock":
      case "paperpaper":
      case "spockspock":
      case "lizardlizard":
        console.log(`user choice => ${this.userChoice}`);
        console.log(`computer choice => ${this.computerChoice}`);
        console.log("DRAW");
        this.showDraw(this.userChoice);
        break;
    }

    this.createGameMatch();
    this.createEndGame();
  }

  sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
  }
}
