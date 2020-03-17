import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Socket } from 'ngx-socket-io';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root',

})
export class HostService implements OnDestroy {
  connected: boolean;
  joinId: string;
  constructor(private socket: Socket, private UserService: UserService) {

  }

  connect(user) {
    if(!this.connected) {
      this.joinId = user.joinId;
      this.socket.emit("user joined", user);
      this.socket.on('users', (users) => {
        console.log('new users: ', users);
        this.UserService.setUsers(users);
        this.connected = true;
      })
    }
      
  }

  getJoinId () {
    return this.joinId;
  }

  disconnect() {
    // this.socket.disconnect();
  }

  ngOnDestroy() {
    console.log('bye');
    // this.socket.disconnect();
  }
}
