import { Component } from '@angular/core';
import { Main } from "./main/main";
import { DatePipe, TitleCasePipe } from '@angular/common';
import { Saldo } from "./saldo/saldo";

@Component({
  selector: 'app-banco',
  imports: [Main, DatePipe, Saldo,TitleCasePipe],
  templateUrl: './banco.html',
  styleUrl: './banco.css',
})
export class Banco {

  dataAtual = new Date();
}
