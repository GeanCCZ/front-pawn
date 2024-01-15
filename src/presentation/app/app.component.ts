import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StockImplementationRepository } from '../../data/repositories/implementation/stock-implementation.repository';
import { StockUseCase } from '../../domain/use-cases/stock.use-case';
import { StockRequest } from '../../data/requests/stocks.request';
import { IGenericRepository } from '../../domain/repositories/generic.repository';
import { StockModel } from '../../domain/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @Input()
  stock?: StockRequest;

  title = 'pawn-project';

  public constructor(private interactor: IGenericRepository<StockModel>) {}

  ngOnInit(): void {
    if (this.stock && this.stock.id && this.stock.id.length > 0) {
      const stock = this.interactor.findAll();
      console.log(stock);
    }
  }
}
