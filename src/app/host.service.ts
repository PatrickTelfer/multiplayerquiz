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
  localUsers: any[];
  constructor(
    private socket: Socket, 
    private UserService: UserService,
    private router: Router,
    private http: HttpClient) {
      
      this.socket.on('uniqueId', (id) => {
        console.log("in host service with unique id", id);
        this.uniqueId = id;
      })

  }

  createRoom() {
    this.http.post<{roomId: string}>('/api/lobby', null).subscribe(room => {
      this.joinId = room.roomId;
      this.router.navigate(['/lobby']);

      const hostUser = new User(this.joinId, "host", true);
      this.isHost = true;
      this.connected = true;

      this.socket.emit("user joined", hostUser);

      this.socket.on('users', (users) => {
        this.UserService.setUsers(users);
        this.localUsers = users;
        // console.log(this.localUsers);
      });

      this.socket.on('startgameHost', (totalPlayers) => {
        this.totalPlayers = totalPlayers;
        this.router.navigate(['/game']);
      });

      this.socket.on('tellHostAnswer', answerData => {
        let ans = answerData.answer;
        let id = answerData.id;

        console.log('telling host answer', answerData);
        console.log(this.localUsers);

        for (let i = 0; i < this.localUsers.length; i++) {
          if (this.localUsers[i]._id == id) {
            this.localUsers[i].answer = ans;
          }
        }

        this.socket.emit('hostAnswer', answerData);
      })


    });
  }

  tellPlayersAnswers() {
    console.log('telling all players answers' ,this.localUsers);
    this.socket.emit('all players answers', this.localUsers);
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
