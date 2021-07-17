/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { Pub } from './pubs/models/Pub';
import { PubService } from './pubs/services/pub.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public pubService: PubService) {}
}
