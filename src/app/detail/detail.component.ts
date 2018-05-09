import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  transaction: any;

  constructor(
    private _shintoService: ShintoService,
    private _route: ActivatedRoute
  ) { 
    this.transaction =  {id: -1, action: "not defined", amount: 0};
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.transaction = this._shintoService.getTransaction(params['id']);
    })
  }


}
