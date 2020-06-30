import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './hub/quiz-list/quiz-list.component';
import { HubComponent } from './hub/hub.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { LobbyComponent } from './hub/join-server/lobby/lobby.component';
import { HttpClientModule } from '@angular/common/http';
import { JoinServerComponent } from './hub/join-server/join-server.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateQuizComponent } from './hub/create-quiz/create-quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// material 
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { GameComponent } from './game/game.component';
 
const config: SocketIoConfig = { url: 'https://realtimequiz.herokuapp.com/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    HubComponent,
    NavBarComponent,
    LobbyComponent,
    JoinServerComponent,
    CreateQuizComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
