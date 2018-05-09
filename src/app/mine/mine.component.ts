import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  amount = 0;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.amount = 0;
  }

  onSubmit() {
    if (this.amount == 5) {
      this._shintoService.mining(this.amount);
      this.amount = 0;
    } else {
      console.log("Wrong!!")
    }
  }
}
