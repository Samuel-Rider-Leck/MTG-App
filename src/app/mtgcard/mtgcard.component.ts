import { Component, OnInit, Input } from '@angular/core';

import {MTGCard} from '../classes/mtgcard';

@Component({
  selector: 'app-mtgcard',
  templateUrl: './mtgcard.component.html',
  styleUrls: ['./mtgcard.component.css']
})
export class MTGCardComponent implements OnInit {
  @Input() card: MTGCard;

  imageUrl :string;

  constructor() { }

  ngOnInit() {
    this.imageUrl = this.card.imageUrl;
    if (!this.imageUrl){
      for(var i=this.card.foreignNames.length;i>0;i--){
        this.imageUrl = this.card.foreignNames[0].imageUrl || this.imageUrl;
      }
      this.imageUrl = this.imageUrl || "assets/blank_card.jpg"
    }
  }

}
