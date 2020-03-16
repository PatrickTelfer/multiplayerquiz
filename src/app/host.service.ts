import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';


@Injectable({
  providedIn: 'root',
  
})
export class HostService {

  constructor() {}

  connect(user: User) {
    
  }
}
