import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { Subscription, Subject } from 'rxjs';
import { GameState } from '../models/GameState';
import { HostService } from '../host.service';
import { GameData } from '../models/game.model';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  private gameSub: Subscription;
  private gameData: GameData

 
  constructor(private gameStateService: GamestateService, private hostService: HostService) { }

  ngOnInit() {
    let pat = new Player('pat', 50);
    let jen = new Player('jen', 30);
    let players: Player[] = [pat, jen];
    players.sort((a, b) => b.getScore() - a.getScore());

    this.gameData = new GameData(GameState.Final, true, 'a', 0, players, 'what is the question?', ['idk', 'maybe', 'hmmm', 'xD']);

    this.gameSub = this.gameStateService.getGameUpdateListener()
      .subscribe((data: GameData) => {
        this.gameData = data;
      })
  }

  ngOnDestroy() {
    this.gameSub.unsubscribe();
  }

  isHost() {
    return this.gameData.isHost();
  }

  isQuestionState() {
    return this.gameData.isQuestionState();
  }

  isAnswerState() {
    return this.gameData.isAnswerState();
  }

  isResultState() {
    return this.gameData.isResultState();
  }

  isFinalState() {
    return this.gameData.isFinalState();
  }

  
}
