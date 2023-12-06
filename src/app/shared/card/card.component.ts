import { Component, Input } from '@angular/core';
import { CardService } from 'src/app/service/card-data.service';
import { CardState } from 'src/app/stateManager/card-state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  @Input() isVisible: boolean = false;

  constructor(
    protected cardService: CardService,
    protected cardState: CardState
  ) {
    cardService.getData();
  }


}
