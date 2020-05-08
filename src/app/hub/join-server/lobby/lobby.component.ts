import { Component, OnInit, OnDestroy } from '@angular/core';
import {HostService} from '../../../host.service';
import { UserService } from '../../../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {
  users = [];
  currentServer: string;
  isHost: boolean;
  private userSub: Subscription;
  constructor(private userService: UserService, private HostService: HostService) { }

  ngOnInit() {
    this.currentServer = this.HostService.getJoinId();
    this.userService.getUsers(this.currentServer);
    this.userSub = this.userService.getUserUpdateListender()
      .subscribe((users: []) => {
        this.users = users;
      });

    this.isHost = this.HostService.isHost;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  startGame() {
    console.log('starting game!');
    this.HostService.startGame();
  }

}
