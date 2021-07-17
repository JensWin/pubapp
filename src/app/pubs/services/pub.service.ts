import { Injectable } from '@angular/core';
import { Pub } from '../models/Pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  public pubs =[
    new Pub(1, 'Scruffy Murphys', 'Schwetzingen', '/pub/1', 'beer'),
    new Pub(2, 'OReillys Irish Pub', 'Mannheim', '/pub/2', 'beer'),
    new Pub(3, 'Störte', 'Mannheim', '/pub/3', 'beer'),
  ];

  constructor() { }

  getPub(id: string){
    return this.pubs.find(p => p.id === Number(id));
  }
}
