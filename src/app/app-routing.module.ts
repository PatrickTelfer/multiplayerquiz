import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './hub/quiz-list/quiz-list.component';
import { HubComponent } from './hub/hub.component';
import { JoinServerComponent } from './hub/join-server/join-server.component';
import { LobbyComponent } from './hub/join-server/lobby/lobby.component';
import { CreateQuizComponent } from './hub/create-quiz/create-quiz.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {path: 'quizzes', component: QuizListComponent},
  {path: 'createQuiz', component: CreateQuizComponent},
  {path: 'edit/:id', component: CreateQuizComponent},
  {path: 'join', component: JoinServerComponent},
  {path: '', component: HubComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
