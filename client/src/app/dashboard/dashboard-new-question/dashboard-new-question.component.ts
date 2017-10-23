import { Component, OnInit } from '@angular/core';

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

  constructor(private _dashboard_service: DashboardService) { }

  ngOnInit() {
    this.new_question = new Question
  }
  addQuestion() {
    this._dashboard_service.addQuestion(this.new_question)
      .then(() => console.log('question added?'))
      .catch(err => console.log('add question error', err))
  }
}
