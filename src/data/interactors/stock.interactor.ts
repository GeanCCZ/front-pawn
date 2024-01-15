import { Injectable } from '@angular/core';
import { StockEntity } from '../repositories/entities/stock.entity';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export abstract class IStockInteractor {
  abstract createStock(): Observable<StockEntity>;
  abstract getStock(): Observable<StockEntity>;
  abstract getStocks(): Observable<StockEntity[]>;
  abstract updateStock(): Observable<StockEntity>;
  abstract deleteStock(): void;
}
