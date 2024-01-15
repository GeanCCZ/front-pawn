import { HttpClient } from '@angular/common/http';
import { StockModel } from '../../../domain/models/stock.model';
import { IGenericRepository } from '../../../domain/repositories/generic.repository';
import { StockRepositoryMapper } from '../mappers/stock-repository.mapper';
import { environment } from '../../../environments/environment.development';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StockImplementationRepository extends IGenericRepository<StockModel> {
  stockMapper = new StockRepositoryMapper();
  private STOCK_API_URL = environment.V1_BASE_URL + '/stock';

  constructor(private http: HttpClient) {
    super();
  }

  create(data: StockModel) {
    return this.http
      .post<StockModel>(`${this.STOCK_API_URL}/list`, data)
      .pipe(map(this.stockMapper.mapFrom));
  }

  findAll() {
    return this.http
      .get<StockModel[]>(this.STOCK_API_URL)
      .pipe(map((data: StockModel[]) => data.map(this.stockMapper.mapFrom)));
  }

  findOne(id: string) {
    return this.http
      .get<StockModel>(`${this.STOCK_API_URL}/${id}`)
      .pipe(map(this.stockMapper.mapFrom));
  }

  update(id: string, data: StockModel) {
    return this.http
      .put<StockModel>(`${this.STOCK_API_URL}/${id}`, data)
      .pipe(map(this.stockMapper.mapFrom));
  }

  delete(id: string) {
    return this.http.delete(`${this.STOCK_API_URL}/${id}`);
  }
}
