import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShintoService {
  transactions = [];
  coin = {
    value: 0,
    owned: 0
  }

  constructor() { }

  mining(ans: number) {
    if (ans === 5) {
      this.transactions.push({
        id: this.transactions.length,
        action: "Mined",
        amount: 1,
        value: this.coin.value
      });
      this.coin.owned += 1;
    }
    console.log(this.transactions);
    console.log(this.coin)
  }

  buying(amount: number) {
    this.transactions.push({
      id: this.transactions.length,
      action: "Bought",
      amount: amount,
      value: this.coin.value
    });
    this.coin.value++;
    this.coin.owned += amount;
    console.log(this.coin)
  }

  selling(amount: number) {
    this.transactions.push({
      id: this.transactions.length,
      action: "Sold",
      amount: amount,
      value: this.coin.value
    });
    this.coin.value--;
    this.coin.owned -= amount;
  }

  getTransaction(id: number) {
    let tran: any;
    this.transactions.forEach(t =>{
      if (t.id == id) tran = t;
    });
    return tran;

  }

}
