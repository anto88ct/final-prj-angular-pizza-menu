import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/service/card-data.service';
import { CardState } from 'src/app/stateManager/card-state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  constructor(
    protected cardService: CardService,
    protected cardState: CardState
  ) {
    cardService.getData();
  }


}
