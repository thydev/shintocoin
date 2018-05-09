import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  amount = 0;
  coin: any;
  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.amount = 0;
    this.coin = this._shintoService.coin;
  }

  onSubmit() {
    if (this.amount > 0) {
      this._shintoService.buying(this.amount);
      this.amount = 0;
    } else {
      console.log("Invalide transaction")
    }
  }
}
