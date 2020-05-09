import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HostService } from './host.service';
import { Subject } from 'rxjs';
import { GameState} from './models/GameState';
import { GameData } from './models/game.model';

@Injectable({
  providedIn: 'root'
})

export class GamestateService {
  private gameData: GameData
  private gameUpdate = new Subject<GameData>();


  constructor(private socket: Socket, private hostService: HostService) {
    // this.state = GameState.Question;
    // this.isHost = hostService.isHost;
  }

  getGameUpdateListener() {
    return this.gameUpdate.asObservable();
  }


}
