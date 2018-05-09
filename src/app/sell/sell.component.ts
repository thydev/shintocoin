import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  amount = 0;
  coin: any;
  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.amount = 0;
    this.coin = this._shintoService.coin;
  }

  onSubmit() {
    if (this.amount > this.coin.owned || this.amount <= 0) {
      console.log("not enough coins to sell");
    } else {
      this._shintoService.selling(this.amount);
      // this.coin = this._shintoService.coin; // passed by ref
      this.amount = 0;
    }
  }
}
