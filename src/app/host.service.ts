import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Socket } from 'ngx-socket-io';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Quiz } from './models/quiz.model';


@Injectable({
  providedIn: 'root',

})
export class HostService {
  connected: boolean;
  joinId: string;
  isHost: boolean;
  totalPlayers: number;
  uniqueId: string;
  quiz: Quiz;
  constructor(
    private socket: Socket, 
    private UserService: UserService,
    private router: Router,
    private http: HttpClient) {
      
      this.socket.on('uniqueId', (id) => {
        this.uniqueId = id;
      })

  }

  createRoom() {
    this.http.post<{roomId: string}>('http://localhost:3000/api/lobby', null).subscribe(room => {
      this.joinId = room.roomId;
      this.router.navigate(['/lobby']);

      const hostUser = new User(this.joinId, "host", true);
      this.isHost = true;
      this.connected = true;

      this.socket.emit("user joined", hostUser);

      this.socket.on('users', (users) => {
        this.UserService.setUsers(users);
      });

      this.socket.on('startgameHost', (totalPlayers) => {
        this.totalPlayers = totalPlayers;
        this.router.navigate(['/game']);
      });

      this.socket.on('tellHostAnswer', answerData => {
        this.socket.emit('hostAnswer', answerData);
      })


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
        this.UserService.setUsers(users);
      });

      this.socket.on('startgame', () => {
        this.router.navigate(['/game']);
      });

    }
      
  }

  startGame(selectedQuizId: String) {
    this.socket.emit('startgame', selectedQuizId);
  }

  getJoinId () {
    return this.joinId;
  }
}
