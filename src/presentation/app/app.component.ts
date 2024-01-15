import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StockImplementationRepository } from '../../data/repositories/implementation/stock-implementation.repository';
import { StockUseCase } from '../../domain/use-cases/stock.use-case';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

const stock = new StockUseCase()
export class AppComponent {
  title = 'pawn-project';
}
