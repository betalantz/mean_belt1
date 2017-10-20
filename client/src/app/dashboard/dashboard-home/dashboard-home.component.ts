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
  constructor(private dashboard_service: DashboardService, private router: Router) { }

  ngOnInit() {
    this.new_user = new User
  }
  login(){
    this.dashboard_service.create(this.new_user)
      .then(() => this.router.navigate(["/dashboard/home"]) )
      .catch(err => console.log("user login error", err))
    
  }
}
