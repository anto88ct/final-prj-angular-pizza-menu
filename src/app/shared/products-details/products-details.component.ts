import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  id?: number;
  card?: Card;
  error?: string;

  constructor(
    private http: HttpClient,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = +activatedRoute.snapshot.params['id'];

    console.log('id', id);

    activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this.http
        .get<Card>(`https://my-json-server.typicode.com/anto88ct/pizza-men-angular/cards/${this.id}`)
        .subscribe({
          next:(res) => {
            console.log(res);
            this.card = res;
          },
          error:(error) => {
            console.log("Error: ", error.message);
            this.error = error.message;
            //gestisce gli errori
          },
        })
    });

  }

}

