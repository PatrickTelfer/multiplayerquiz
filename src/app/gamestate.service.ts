import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HostService } from './host.service';
import { Subject } from 'rxjs';
import { GameState } from './models/GameState';
import { GameData } from './models/game.model';
import { Quiz } from './models/quiz.model';
import { QuizQuestion } from './models/quiz-question.model';

@Injectable({
  providedIn: 'root'
})

export class GamestateService {
  // private gameData: GameData
  private questionUpdate = new Subject<QuizQuestion>();
  private stateUpdate = new Subject<GameState>();
  private answerUpdate = new Subject<number>();
  private quiz: Quiz;
  private currentQuestion: QuizQuestion;
  private currentQuestionIndex: number;
  private totalAnswered: number = 0;

  constructor(private socket: Socket, private hostService: HostService) {
    this.currentQuestionIndex = 0;


    this.socket.on('selectedquiz', (quiz) => {
      console.log('selectedquiz');
      this.quiz = quiz;
      this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      console.log(this.currentQuestion);
      this.questionUpdate.next(this.currentQuestion);
    });


    this.socket.on('playerAnswer', () => {
      console.log('playerAnswer');
      this.totalAnswered++;
      if (this.hostService.isHost) {
        if (this.totalAnswered >= this.hostService.totalPlayers) {
          this.answerUpdate.next(this.currentQuestion.answerIndex);


          this.socket.emit('updateAnswerForAllPlayers', this.currentQuestion.answerIndex);
          this.currentQuestionIndex++;
          if (this.currentQuestionIndex < this.quiz.questions.length) {
            this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
            
          }
          this.totalAnswered = 0;
            this.socket.emit('allPlayersAnswered');

        }
      }

    });

    this.socket.on('updateAnswer', (answer) => {
      this.answerUpdate.next(answer);
    })


    this.socket.on('updateState', (state) => {
      if (state == "question") {
        this.answerUpdate.next(null);
        this.updateState(GameState.Question);
      } else if (state == "answer") {
        this.updateState(GameState.Answer);
      } else if (state == "result") {
        this.updateState(GameState.Result);
      } else if (state == "final") {
        this.updateState(GameState.Final);
      }
    });
  }

  nextQuestion() {
    this.questionUpdate.next(this.currentQuestion);
    if (this.currentQuestionIndex >= this.quiz.questions.length) {
      this.socket.emit("gameover")
    } else {
      this.socket.emit('nextquestion');

    }
  }

  updateState(gameState: GameState) {
    this.stateUpdate.next(gameState);
  }

  getQuestionUpdateListener() {
    return this.questionUpdate.asObservable();
  }

  getStateUpdateListener() {
    return this.stateUpdate.asObservable();
  }

  getAnswerUpdateListener() {
    return this.answerUpdate.asObservable();
  }

  answerQuestion(answer: number) {
    console.log(this.hostService.uniqueId);
    let answerData = {
      id: this.hostService.uniqueId,
      answerIndex: answer
    }
    this.socket.emit('answer', answerData);
  }

  updateQuestion() {
    const target = {};
    this.questionUpdate.next(Object.assign(this.currentQuestion, target));
  }

}
