import { NgModule } from '@angular/core';
import { IGenericRepository } from '../domain/repositories/generic.repository';
import { StockUseCase } from '../domain/use-cases/stock.use-case';
import { StockModel } from '../domain/models';
import { StockImplementationRepository } from './repositories/implementation/stock-implementation.repository';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const StockUseCaseFactory = (repository: IGenericRepository<StockModel>) =>
  new StockUseCase(repository);

const StockUseCaseProvider = {
  provide: StockUseCase,
  useFactory: StockUseCaseFactory,
  deps: [IGenericRepository<StockModel>],
};

@NgModule({
  providers: [
    StockUseCaseProvider,
    {
      provide: IGenericRepository<StockModel>,
      useClass: StockImplementationRepository,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
