import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"

import { User } from './../dashboard/user'

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  login_stat() {
    return this.http.get("/login_stat").map(data => data.json()).toPromise()
  }
  getQuestions() {
    return this.http.get('/getQuestions').map(data => data.json()).toPromise()
  }
  updateScore(score) {
    return this.http.post('/updateScore', score).map(data => data.json()).toPromise()
  }
}
