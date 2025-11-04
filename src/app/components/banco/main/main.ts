import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  tipotransacao= "";
  valorTransacao = "";
   aoSubmeter() {
    console.log(this.tipotransacao);
    console.log(this.valorTransacao);
    this.tipotransacao = "";
    this.valorTransacao = "";
  }
}
