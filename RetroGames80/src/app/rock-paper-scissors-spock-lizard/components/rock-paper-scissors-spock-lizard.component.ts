import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors-spock-lizard',
  templateUrl: './rock-paper-scissors-spock-lizard.component.html',
  styleUrls: ['./rock-paper-scissors-spock-lizard.component.scss']
})
export class RockPaperScissorsSpockLizardComponent implements OnInit {
   userVictories: number;
   computerVictories: number;
   userScore: number;
   computerScore: number;
   result: string = '';
   userChoice: string = '';
   computerChoice: string = '';
  constructor() { }

  ngOnInit() {
    this.userVictories = parseInt(localStorage.getItem('userVictoriesRPSSL')) || 0;
    this.computerVictories = parseInt(localStorage.getItem('computerVictoriesRPSSL')) || 0;
    this.userScore = parseInt(localStorage.getItem('userScoreRPSSL')) || 0;
    this.computerScore = parseInt(localStorage.getItem('computerScoreRPSSL')) || 0;
  }

  getComputerChoice() {
    const choices = ["rock","paper","scissors","spock","lizard"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
  }

  createGameRound(round: string) {
    switch (round) {
      case 'userWin': {
        this.userScore++;
        localStorage.setItem('userScoreRPSSL', this.userScore.toString());
        this.result = "USER WIN ROUND";
        break;
      }
      case 'computerWin' : {
        this.computerScore++;
        localStorage.setItem('computerScoreRPSSL', this.computerScore.toString());
        this.result = "COMPUTER WIN ROUND";
        break;
      }
      case 'draw' : {
        this.result = "DRAW ROUND";
        break;
      }
    }
  }

  createGameMatch() {
    if (this.userScore === 16 || this.computerScore === 16) {
      localStorage.removeItem('userScoreRPSSL');
      localStorage.removeItem('computerScoreRPSSL');
      if (this.userScore === 16 && this.computerScore !== 16) {
        ++this.userVictories;
        localStorage.setItem('userVictoriesRPSSL', this.userVictories.toString());
        this.result = "USER WIN MATCH";
      } else if (this.userScore !== 16 && this.computerScore === 16) {
        ++this.computerVictories;
        localStorage.setItem('computerVictoriesRPSSL', this.computerVictories.toString());
        this.result = "COMPUTER WIN MATCH";
      }
      setTimeout(() => this.resetScoreBoard(), 1000);
      setTimeout(() => this.sleep(1000), 1);
    }
  }

  createEndGame() {
    if (this.userVictories === 3 || this.computerVictories === 3) {
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
        this.createGameRound('userWin');
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
        this.createGameRound('computerWin');
        break;
      case "scissorsscissors":
      case "rockrock":
      case "paperpaper":
      case "spockspock":
      case "lizardlizard":
        this.createGameRound('draw');
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
