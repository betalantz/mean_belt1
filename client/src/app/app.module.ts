import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardNewQuestionComponent } from './dashboard/dashboard-new-question/dashboard-new-question.component';

import { DashboardService } from './dashboard/dashboard.service'
import { GameService } from './game/game.service';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardNewQuestionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DashboardService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
