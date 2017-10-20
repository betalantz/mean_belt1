import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component'
import { DashboardNewQuestionComponent } from './dashboard/dashboard-new-question/dashboard-new-question.component'
import { GameComponent } from './game/game.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard/home' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'home', component: DashboardHomeComponent},
    { path: 'add', component: DashboardNewQuestionComponent }
  ]},
  { path: 'play', component: GameComponent },
  // { path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
