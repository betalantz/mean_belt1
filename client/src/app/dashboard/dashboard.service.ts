import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"

import { User } from './user'
import { Question } from './../game/question'

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  create(new_user: User){
    return this.http.post("/login", new_user).map(data => data.json()).toPromise()
  }
  addQuestion(new_question) {
    return this.http.post('/addQuestion', new_question).map(data => data.json()).toPromise()
  }
  get_users(){
    return this.http.get('/get_users').map(data => data.json()).toPromise()
  }
}
