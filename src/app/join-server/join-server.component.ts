import { Component, OnInit } from '@angular/core';
import { HostService } from '../host.service';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-join-server',
  templateUrl: './join-server.component.html',
  styleUrls: ['./join-server.component.css']
})
export class JoinServerComponent implements OnInit {
  serverId: string;
  constructor(private HostService : HostService, private router: Router) { }

  ngOnInit() {
  }

  join () {
    let name = prompt('enter a name');
    let user = new User(this.serverId, name);
    this.HostService.connect(user);
    this.router.navigate(['/lobby']);
  }

}
