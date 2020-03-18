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
import { CreateQuizComponent } from './hub/create-quiz/create-quiz.component'
 
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    HubComponent,
    NavBarComponent,
    LobbyComponent,
    JoinServerComponent,
    CreateQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
