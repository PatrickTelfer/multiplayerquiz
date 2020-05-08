import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

enum GameState {
  Question,
  Answer,
  Result,
  Final
}

@Injectable({
  providedIn: 'root'
})

export class GamestateService {
  private state: GameState;

  constructor(private socket: Socket) {
    this.state = GameState.Question;
  }


}
