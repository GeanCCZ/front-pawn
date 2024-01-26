import { HttpClient } from '@angular/common/http';
import { StockModel } from '../../../domain/models/stock.model';
import { IGenericRepository } from '../../../domain/repositories/generic.repository';
import { StockRepositoryMapper } from '../mappers/stock-repository.mapper';
import { environment } from '../../../environments/environment.development';
import { flatMap, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { StockEntity } from '../entities';
@Injectable({
  providedIn: 'root',
})
export class StockImplementationRepository extends IGenericRepository<StockModel> {
  private STOCK_API_URL = environment.V1_BASE_URL + 'stock';
  private stockMapper = new StockRepositoryMapper();
  constructor(private readonly http: HttpClient) {
    super();
  }

  create(data: StockModel) {
    return this.http
      .post<StockEntity>(`${this.STOCK_API_URL}`, data)
      .pipe(map(this.stockMapper.mapFrom));
  }

  findAll() {
    const stocks = this.http.get<any>(this.STOCK_API_URL + '/list').pipe(
      map((res) => {
        return res.data.map((data: StockEntity) => {
          return this.stockMapper.mapFrom(data);
        });
      })
    );

    return stocks;
  }

  findOne(id: string) {
    return this.http
      .get<StockEntity>(`${this.STOCK_API_URL}/${id}`)
      .pipe(map(this.stockMapper.mapFrom));
  }

  update(id: string, data: StockModel) {
    return this.http
      .put<StockEntity>(`${this.STOCK_API_URL}/${id}`, data)
      .pipe(map(this.stockMapper.mapFrom));
  }

  delete(id: string) {
    return this.http.delete(`${this.STOCK_API_URL}/${id}`);
  }
}
