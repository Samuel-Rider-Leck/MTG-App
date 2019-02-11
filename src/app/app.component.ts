import { Component, OnInit } from '@angular/core';

import { MTGCardService } from './services/mtgcard.service';
import { MTGCard } from './classes/mtgcard'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MTGCardService]
})
export class AppComponent {
  cards :MTGCard[]

  constructor(private service: MTGCardService) { }

  ngOnInit() {
    this.service.getCards()
      .subscribe(resp => {this.cards = resp.cards})
  }
}
