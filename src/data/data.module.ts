import { NgModule } from '@angular/core';
import { IGenericRepository } from '../domain/repositories/generic.repository';
import { StockUseCase } from '../domain/use-cases/stock.use-case';
import { StockModel } from '../domain/models';
import { StockImplementationRepository } from './repositories/implementation/stock-implementation.repository';

const StockUseCaseFactory = (reposotory: IGenericRepository<StockModel>) =>
  new StockUseCase(reposotory);

const StockUseCaseProvider = {
  provide: StockUseCase,
  useFactory: StockUseCaseFactory,
  deps: [IGenericRepository<StockModel>],
};

@NgModule({
  providers: [
    StockUseCaseProvider,
    { provide: IGenericRepository, useClass: StockImplementationRepository },
  ],
})
export class DataModule {}
