import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"


import { User } from './../user'
import { Question } from './../../game/question'
import { FormsModule } from '@angular/forms'
import { DashboardService } from './../dashboard.service'

@Component({
  selector: 'app-dashboard-new-question',
  templateUrl: './dashboard-new-question.component.html',
  styleUrls: ['./dashboard-new-question.component.css']
})
export class DashboardNewQuestionComponent implements OnInit {
  new_question: Question
  logged_user: User

  constructor(private _dashboard_service: DashboardService, private _router: Router) { }

  ngOnInit() {
    this.new_question = new Question
    this.inSession()
  }
  addQuestion() {
    this._dashboard_service.addQuestion(this.new_question)
      .then(() => this._router.navigate(["/dashboard/home"]))
      .catch(err => console.log('add question error', err))
  }
  inSession() {
    this._dashboard_service.login_stat()
      .then(user => this.logged_user = user)
      .catch(() => this._router.navigate(["/dashboard/home"]))
  }
  
}
