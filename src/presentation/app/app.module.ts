import { NgModule } from '@angular/core';
import { IGenericRepository } from '../../domain/repositories/generic.repository';
import { StockImplementationRepository } from '../../data/repositories/implementation/stock-implementation.repository';
import { StockModel } from '../../domain/models';
import { DataModule } from '../../data/data.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { StockComponent } from './stocks/stock.component';

@NgModule({
  declarations: [AppComponent, StockComponent],
  imports: [DataModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: IGenericRepository<StockModel>,
      useClass: StockImplementationRepository,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
