import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from './../user'
import { DashboardService } from './../dashboard.service'

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  new_user: User
  all_users: Array<User>

  constructor(
    private _dashboard_service: DashboardService, 
    private _router: Router
  ) { }
  
  ngOnInit() {
    this.new_user = new User 
    this.get_users()
  }
  login(){
    this._dashboard_service.create(this.new_user)
      .then(() => this._router.navigate(["/dashboard/home"]) )
      .catch(err => console.log("user login error", err))
  }
  get_users(){
    this._dashboard_service.get_users()
      .then(users => {
        console.log(users);
        this.all_users = users
      })
      .catch(err => console.log('Error in get_users', err))
  }
}
