import { Component, OnInit } from '@angular/core';
import { DynamicInputService,Transfer } from '../services/dynamic-input.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.page.html',
  styleUrls: ['./transfers.page.scss'],
})
export class TransfersPage implements OnInit {
  username: string;
  phone: string;
  transferamt: string;
  transfer: Transfer;
  tranferdetails: Transfer;
  constructor( private service: DynamicInputService) { }

  postTransfer(){
    this.tranferdetails = {transferID: '1', userID: '1', userName: this.username, phoneNumber: this.phone, transferAmount: this.transferamt}

    this.service.makeTransfer(this.tranferdetails).subscribe(data=>{
      data = this.tranferdetails;
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
