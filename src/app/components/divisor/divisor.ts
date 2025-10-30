import { Component } from '@angular/core';
import { Banco } from "../banco/banco";

@Component({
  selector: 'app-divisor',
  imports: [Banco],
  templateUrl: './divisor.html',
  styleUrl: './divisor.css',
})
export class Divisor {

}
