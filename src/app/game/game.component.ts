import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { Subscription, Subject } from 'rxjs';
import { GameState } from '../models/GameState';
import { HostService } from '../host.service';
import { GameData } from '../models/game.model';
import { Player } from '../models/player.model';
import { QuizQuestion } from '../models/quiz-question.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  private stateSub: Subscription;
  private questionSub: Subscription;
  private answerSub: Subscription;
  private gameState: GameState;
  private yourAnswerSub: Subscription;
  private question: QuizQuestion;
  private answer: number;
  private yourAnswer: number;


  constructor(private gameStateService: GamestateService, private hostService: HostService) { }

  ngOnInit() {
    // let pat = new Player('pat', 50);
    // let jen = new Player('jen', 30);
    // let players: Player[] = [pat, jen];
    // players.sort((a, b) => b.getScore() - a.getScore());

    //this.gameData = new GameData(GameState.Final, true, 'a', 0, players, 'what is the question?', ['idk', 'maybe', 'hmmm', 'xD']);
    this.stateSub = this.gameStateService.getStateUpdateListener()
      .subscribe((state: GameState) => {
        console.log("state updated to! ", state);
        this.gameState = state;
      })

    this.questionSub = this.gameStateService.getQuestionUpdateListener()
      .subscribe((q: QuizQuestion) => {
        // console.log('new question!', q);
        this.question = q;
      })

    this.answerSub = this.gameStateService.getAnswerUpdateListener()
      .subscribe((answer: number) => {
        this.answer = answer;
      })

      this.yourAnswerSub = this.gameStateService.getYourAnswerUpdateListener()
        .subscribe((yourAnswer: number) => {
          this.yourAnswer = yourAnswer;
          console.log(yourAnswer);
        });

  }

  onAnswer(index){
    // console.log("answering, ", index)
    this.gameStateService.answerQuestion(index);
    this.gameState = GameState.Answer;
  }

  nextQuestion() {
    this.gameStateService.nextQuestion();
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe();
    this.questionSub.unsubscribe();
    this.answerSub.unsubscribe();
    this.yourAnswerSub.unsubscribe();
  }

  isHost() {
    return this.hostService.isHost;
  }

  isQuestionState() {
    return this.gameState == GameState.Question;
  }

  isAnswerState() {
    return this.gameState == GameState.Answer;
  }

  isResultState() {
    return this.gameState == GameState.Result;
  }

  isFinalState() {
    return this.gameState == GameState.Final;
  }


}
