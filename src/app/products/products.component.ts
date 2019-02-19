import { Component, OnInit } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { ApiService } from '../api.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['descricao', 'preco'];
  data: Product[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
