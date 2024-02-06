import { Component, Input } from '@angular/core';
import { navbarOptions } from '../../base/options/options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @Input()
  options = navbarOptions;
}
