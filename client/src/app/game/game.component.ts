import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from './../dashboard/user'
import { Question } from './question'
import { GameService } from './game.service'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  logged_user: User
  allQuestions: Array<Question>
  quizQuestions: Array<Question> = []
  quizResults = {}

  constructor(private _game_service: GameService, private _router: Router ) { }

  ngOnInit() {
    this.inSession()
    this.getQuestions()
  }
  inSession() {
    this._game_service.login_stat()
      .then(user => this.logged_user = user)
      .catch(() => this._router.navigate(["/dashboard/home"]))
  }
  getQuestions(){
    this._game_service.getQuestions()
      .then(results => {
        this.allQuestions = results
        
        this.shuffleArray(this.allQuestions)
        
        for(let i=0; i<3; i++){
          this.allQuestions[i].answers = this.shuffleArray(this.allQuestions[i].answers)
          this.quizQuestions.push(this.allQuestions[i])
        }
        console.log(this.quizQuestions)
      })
      .catch(err => console.log('getQuestions error', err))
  }
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  score() {
    console.log('quiz results submitted', this.quizResults);
    let score = 0
    for(let rightAns in this.quizResults){
      if(this.quizResults[rightAns]=='true'){
        score++
      }
    }
    console.log(this.logged_user.name, 'got a score of', score)
    this._game_service.updateScore({score:score}) 
      .then(() => this._router.navigate(['']))
      .catch(err => {
        alert('Please try again.')
      })
  }
}
