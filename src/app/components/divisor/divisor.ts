import { Component } from '@angular/core';
import { Banco } from "../banco/banco";
import { Extrato } from "../extrato/extrato";

@Component({
  selector: 'app-divisor',
  imports: [Banco, Extrato],
  templateUrl: './divisor.html',
  styleUrl: './divisor.css',
})
export class Divisor {

}
