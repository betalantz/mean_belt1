import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"

import { User } from './user'

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  create(new_user: User){
    return this.http.post("/login", new_user).map(data => data.json()).toPromise()
  }

}
