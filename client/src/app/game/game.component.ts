import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from './../dashboard/user'
import { GameService } from './game.service'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  logged_user: User

  constructor(private game_service: GameService, private router: Router ) { }

  ngOnInit() {
    this.game_service.login_stat()
      .then(user => this.logged_user = user)
      .catch(() => this.router.navigate(["/dashboard/home"]))
      
  }

}
