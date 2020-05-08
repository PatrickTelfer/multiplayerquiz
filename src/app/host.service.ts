import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Socket } from 'ngx-socket-io';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',

})
export class HostService {
  connected: boolean;
  joinId: string;
  isHost: boolean;
  constructor(
    private socket: Socket, 
    private UserService: UserService,
    private router: Router,
    private http: HttpClient) {

  }

  createRoom() {
    this.http.post<{roomId: string}>('http://localhost:3000/api/lobby', null).subscribe(room => {
      this.joinId = room.roomId;
      console.log("createroomid: ", this.joinId);
      this.router.navigate(['/lobby']);

      const hostUser = new User(this.joinId, "host", true);
      this.isHost = true;
      this.connected = true;

      this.socket.emit("user joined", hostUser);

      this.socket.on('users', (users) => {
        console.log('new users from create room', users);
        this.UserService.setUsers(users);
      });

      this.socket.on('startgame', () => {
        this.router.navigate(['/game']);
      });

    });
  }

  connect(user) {
    if(!this.connected) {
      this.joinId = user.joinId;
      this.isHost = false;

      this.socket.emit("user joined", user);
      this.connected = true;
      this.router.navigate(['/lobby'])

      this.socket.on('users', (users) => {
        console.log('new users: ', users);
        this.UserService.setUsers(users);
      });

      this.socket.on('startgame', () => {
        this.router.navigate(['/game']);
      });

    }
      
  }

  startGame() {
    this.socket.emit('startgame');
  }

  getJoinId () {
    return this.joinId;
  }
}
