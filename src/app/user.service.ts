import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [];
  private usersUpdated = new Subject<User[]>();
  constructor(private http: HttpClient) { }

  getUsers(joinId: string) {
    this.http.get('api/users/' + joinId)
      .subscribe(
        (newUsers: []) => {
          console.log("user service(new users): ", newUsers);
          this.users = newUsers;
          this.usersUpdated.next([...this.users]);
        }
      )
  }

  setUsers(users: []) {
    this.users = users;
    this.usersUpdated.next([...this.users]);
  }
  getUserUpdateListender() {
    return this.usersUpdated.asObservable();
  }
}

