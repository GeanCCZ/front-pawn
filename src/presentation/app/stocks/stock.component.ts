import { Component, Input } from '@angular/core';
import { IGenericRepository } from '../../../domain/repositories/generic.repository';
import { StockModel } from '../../../domain/models';
import { stockFields } from '../../../base/stock/fields';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent {
  @Input()
  stocks: Array<StockModel> = [];

  @Input()
  fields = stockFields;

  @Input()
  user = 'Admin';

  constructor(private stockInteractor: IGenericRepository<StockModel>) {}

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks() {
    return this.stockInteractor
      .findAll()
      .subscribe((data) => (this.stocks = data.map((stock) => stock)));
  }
}
