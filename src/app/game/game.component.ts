import { Component, OnInit } from '@angular/core';
import { GamestateService } from '../gamestate.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameStateService: GamestateService) { }
  
  ngOnInit() {
  }

}
