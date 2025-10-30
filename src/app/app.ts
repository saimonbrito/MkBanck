import { Component, signal } from '@angular/core';
import { Divisor } from './components/divisor/divisor';


@Component({
  selector: 'app-root',
  imports: [Divisor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conta-virtual-Angular');
}
