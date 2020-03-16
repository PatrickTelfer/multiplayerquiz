import { Component, OnInit } from '@angular/core';
import { HostService } from '../host.service';

@Component({
  selector: 'app-join-server',
  templateUrl: './join-server.component.html',
  styleUrls: ['./join-server.component.css']
})
export class JoinServerComponent implements OnInit {
  serverId: string;
  constructor(private HostService : HostService) { }

  ngOnInit() {
  }

  join () {
    alert(this.serverId)
  }

}
