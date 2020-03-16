import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { HubComponent } from './hub/hub.component';
import { JoinServerComponent } from './join-server/join-server.component';


const routes: Routes = [
  {path: 'quizzes', component: QuizListComponent},
  {path: 'join', component: JoinServerComponent},
  {path: '', component: HubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
