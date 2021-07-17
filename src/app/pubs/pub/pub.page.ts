import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pub } from '../models/Pub';
import { PubService } from '../services/pub.service';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.page.html',
  styleUrls: ['./pub.page.scss'],
})
export class PubPage implements OnInit {
  public selectedPub: Pub;
  constructor(private activatedRoute: ActivatedRoute, public pubService: PubService) { }

  ngOnInit() {
    this.selectedPub = this.pubService.getPub(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
