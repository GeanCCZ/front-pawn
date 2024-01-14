import { Observable } from 'rxjs';
import { UseCase } from '../base';
import { StockModel } from '../models/stock.model';
import { IGenericRepository } from '../repositories/generic.repository';

export class StockUseCase implements UseCase<StockModel, StockModel> {
  constructor(private repository: IGenericRepository<StockModel>) {}

  execute(data: StockModel): Observable<StockModel> {
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
