import { Component, OnInit, OnDestroy } from '@angular/core';
import {HostService} from '../../../host.service';
import { UserService } from '../../../user.service';
import { Subscription } from 'rxjs';
import { QuizService } from 'src/app/quiz.service';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {
  users = [];
  currentServer: string;
  isHost: boolean;
  quizzes : Quiz[] = [];
  private quizSub: Subscription;
  private userSub: Subscription;

  selectedQuizId: string;

  constructor(
    private userService: UserService, 
    private HostService: HostService,
    private quizService: QuizService
    ) { }

  ngOnInit() {
    this.currentServer = this.HostService.getJoinId();
    this.userService.getUsers(this.currentServer);
    this.userSub = this.userService.getUserUpdateListender()
      .subscribe((users: []) => {
        this.users = users;
      });

    this.isHost = this.HostService.isHost;

    if (this.isHost == true) {
      this.quizService.getQuizzes();
      this.quizSub = this.quizService.getQuizUpdateListener()
        .subscribe((quizzes: Quiz[]) => {
          this.quizzes = quizzes;
        })
    }

  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  startGame() {
    console.log('starting game!');
    if (this.selectedQuizId) {
      this.HostService.startGame(this.selectedQuizId);
    } else {
      alert('you must select a quiz');
    }
  }

}
