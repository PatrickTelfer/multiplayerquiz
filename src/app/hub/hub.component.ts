import { Component, OnInit, OnDestroy } from '@angular/core';
import { HostService } from '../host.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit, OnDestroy {

  constructor(private HostService: HostService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onGoToJoinServer() {
    if(this.HostService.connected) {
      this.router.navigate(['/lobby']);
    } else {
      this.router.navigate(['/join']);
    }
  }

  createServer() {
    this.HostService.createRoom();
  }

}
