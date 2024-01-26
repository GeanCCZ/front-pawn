import { Component, Input } from '@angular/core';
import { IGenericRepository } from '../../../domain/repositories/generic.repository';
import { StockModel } from '../../../domain/models';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  //styleUrls: ['./stock.component.css'],
})
export class StockComponent {
  stocks: Array<StockModel> = [];
  constructor(private stockInteractor: IGenericRepository<StockModel>) {}

  ngOnInit(): void {
    this.getStocks();
  }
  getStocks(): any {
    const stocks = this.stockInteractor.findAll().subscribe((data) => {
      return data;
    });
    console.log(stocks, 'stocks');
  }
}
