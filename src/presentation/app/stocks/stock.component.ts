import { Component, Input } from '@angular/core';
import { StockRequest } from '../../../data/requests/stocks.request';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
})
export class StockComponent {
  @Input()
  stock?: StockRequest;

  ngOnInit(): void {
    if (this.stock && this.stock.id && this.stock.id.length > 0) {
      const stock = this.stock;
    }
  }
}
