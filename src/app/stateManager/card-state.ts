import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { CardService } from '../service/card-data.service';


@Injectable({
  providedIn: 'root',
})
export class CardState {
  cards: Card[] = [];
  isVisible: boolean = true; //to see card feature
  btnDisabled: boolean = true; //to enable/disable modal's button
  isModal: boolean = true; //to show modal
  init(cards: Card[]) {
    this.cards = cards;
    console.log('data after init', this.cards);
  }

  increment(cont: Card) {
    /**
     * push into Obj Array
     * {"quantity" : 1}
     * {"quantity" : 2}
     * ...
     */
    console.log('increment');

    cont.quantity++;
    console.log(cont.quantity);

    //pusho nel mio obj
    this.cards.map((item) => item.quantity !== cont.quantity);

    //active button cart
    this.btnDisabled = false;

    console.log('aumentato : ', this.cards);
  }

  decrement(cont: Card) {
    console.log('decrement');
    console.log(cont.quantity);

    if (cont.quantity == 0) {
      cont.quantity = 0;
    } else {
      cont.quantity--;
      //pusho
      this.cards.map((item) => item.quantity !== cont.quantity);
      console.log('decrementato : ', this.cards);
    }
  }

  delete(card: Card) {
    console.log('deleted card');
    this.cards = this.cards.filter((element) => element.id !== card.id);

    console.log('eliminated : ', this.cards);
  }

  openModal() {

    //loop entire objct to check if quantity is > 1 and enable cart button

    console.log('card', this.cards);

    //qauntity > 1
    this.cards.forEach((item) => {
      console.log(item.quantity);
      if (item.quantity > 0) {
        this.isModal = false;
      }
    });
  }

  closeModal(){
    this.isModal = true;
  }
}
