import { Observable } from 'rxjs';
import { StockModel } from '../models/stock.model';
import { IGenericRepository } from '../repositories/generic.repository';
import { StockImplementationRepository } from '../../data/repositories/implementation/stock-implementation.repository';

export class StockUseCase implements IGenericRepository<StockModel> {
  constructor(private repository: IGenericRepository<StockModel>) {}

  create(data: StockModel): Observable<StockModel> {
    return this.repository.create(data);
  }

  findAll(): Observable<StockModel[]> {
    return this.repository.findAll();
  }

  findOne(id: string): Observable<StockModel> {
    return this.repository.findOne(id);
  }

  update(id: string, data: StockModel): Observable<StockModel> {
    return this.repository.update(id, data);
  }

  delete(id: string): void {
    this.repository.delete(id);
  }
}
