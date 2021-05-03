import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Booking, DynamicInputService, Transport } from '../services/dynamic-input.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  bookingid: any;
  userid: any;
  cartype: string ;
  bookingprice: string;
  ttype: string;
  tprice: string;

  transports: Transport[];
  bookings: Booking;

  constructor(private service: DynamicInputService) { 
   }

   clicker(){
     this.ttype = document.getElementById('transtype').innerText;
     this.tprice = document.getElementById('transprice').innerText;
     console.log('Type: ' + this.ttype , 'Price: ' + this.tprice)
     this.bookings = {bookingID: '1', userID: '1', carType: this.ttype, bookingPrice: this.tprice};
     console.log(this.bookings);
     this.service.postBooking(this.bookings).subscribe(data=> {
      this.bookings = data;
    })
   }

  ngOnInit() {
    this.service.showtransport().subscribe(response=> {
      this.transports = response;
    })
  }

}
