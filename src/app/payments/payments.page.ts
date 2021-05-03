import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { DynamicInputService, Fares, Payments } from '../services/dynamic-input.service';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  Clocation: string;
  Dlocation: string;
  TaxiID: string;
  price: string = '';

  fare: Fares;
  newd= [];
  payment: Payments;
  

  constructor(public service: DynamicInputService) { }

  getTripData(){
    console.log(this.Clocation);
    console.log(this.Dlocation);
    console.log(this.price);

    this.service.getFare().subscribe(response =>{
      this.fare = response;
      console.log(this.fare);

      for(let key in response){
        this.newd.push(response[key])
      }

      this.newd = this.newd.filter(res=>{
        return res.destination.toLowerCase().match(this.Dlocation.toLowerCase());
        
      });

      })
  }

  postPayment(){
    this.payment = {paymentID:'3',origin: this.Clocation, destination: this.Dlocation, fare: this.price};

    this.service.postpayments(this.payment).subscribe(data=> {
      data = this.payment;
    })


  }

  ngOnInit() {
  }

}
