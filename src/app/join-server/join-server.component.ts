import { Component, OnInit } from '@angular/core';
import { HostService } from '../host.service';
import { User } from '../models/user.model';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-join-server',
  templateUrl: './join-server.component.html',
  styleUrls: ['./join-server.component.css']
})
export class JoinServerComponent implements OnInit {
  serverId: string;
  name: string;
  joinForm;
  constructor(
    private HostService : HostService, 
    private formBuilder: FormBuilder)
     {
      this.joinForm = this.formBuilder.group({
        name: '',
        serverId: ''
      })
     }

  ngOnInit() {
  }

  onSubmit(joinData) {
    this.name = joinData.name;
    this.serverId = joinData.serverId;
    if (this.name != '' && this.serverId != '' ) {
      const user = new User(this.serverId, this.name);
      this.HostService.connect(user);
      this.joinForm.reset();
    }
  }

  join () {
    let name = prompt('enter a name');
    let user = new User(this.serverId, name);
    this.HostService.connect(user);
  }

}
