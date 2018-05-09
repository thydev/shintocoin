import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  transactions: any;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.transactions = this._shintoService.transactions;
  }

}
