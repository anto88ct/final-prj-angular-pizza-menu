import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Card } from '../models/card.model';
import { CardState } from '../stateManager/card-state';
@Injectable({
  providedIn: 'root',

})
export class CardService{
  constructor(public http: HttpClient, public cardState: CardState) {}

  getData() {
    return this.http
      .get<Card[]>(
        'https://my-json-server.typicode.com/anto88ct/pizza-men-angular/cards'
      )
      .subscribe((res) => {
        console.log('data : ', res);
        this.cardState.init(res);
      });
  }
}
