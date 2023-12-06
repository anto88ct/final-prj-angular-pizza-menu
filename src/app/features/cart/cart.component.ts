import { Component } from '@angular/core';
import { CardState } from 'src/app/stateManager/card-state';
import { CardService } from '../../service/card-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(protected cardState: CardState, protected cardService: CardService) {}

  resetAll(){
    //reset and call service to call API and reset Json
    this.cardService.getData()
  }
}

