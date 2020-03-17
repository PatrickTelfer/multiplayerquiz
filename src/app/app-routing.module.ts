import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { HubComponent } from './hub/hub.component';
import { JoinServerComponent } from './join-server/join-server.component';
import { LobbyComponent } from './lobby/lobby.component';


const routes: Routes = [
  {path: 'quizzes', component: QuizListComponent},
  {path: 'join', component: JoinServerComponent},
  {path: '', component: HubComponent},
  {path: 'lobby', component: LobbyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
