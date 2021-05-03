import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterpolationConfig, TreeError } from '@angular/compiler';


export interface User{
  userID: string;
  userName: string;
  email: string;
  DOB: string;
  phoneNumber: string;
  balance: string;
}

export interface Payments{
  paymentID: string;
  origin: string;
  destination: string;
  fare: string;
}

export interface Transport{
  transportID: string;
  transportType: string;
  transportImg: string;
  availability: string;
  price: string;
}

export interface Booking{
  bookingID: string;
  userID: string;
  carType: string;
  bookingPrice: string;
}
export interface Fares{
  fireID: string;
  origin: string
  destination: string;
  fare: string;
}

export interface Transfer{
  transferID: string;
  userID: string;
  userName: string;
  phoneNumber: string;
  transferAmount: string;
}

@Injectable({
  providedIn: 'root'
})

export class DynamicInputService {
  private url = 'http://localhost/crud_api/api/users';
  private payment_url = 'http://localhost/crud_api/api/payments/';
  private transporturl = 'http://localhost/crud_api/api/transport/';
  private bookingurl = 'http://localhost/crud_api/api/bookings/';
  private fareurl = 'http://localhost/crud_api/api/fares/';
  private tranferurl = 'http://localhost/crud_api/api/transfers/';

  constructor(private http: HttpClient) { }

  getAllUserData(){
    return this.http.get<[User]>(this.url);
  }

  getAllpaymentData(){
    return this.http.get<[Payments]>(this.payment_url);
  }

  getUserData(userID: string){
    return this.http.get<[User]>(this.url + '/' + userID);
  }

  createUser(user: User){
    return this.http.post<[User]>(this.url, user);
  }

  updateUser(user: User, userID: string){
    return this.http.put<[User]>(this.url + '/' + userID, user);
  }

  removeUser(id: string){
    return this.http.delete<[User]>(this.url + '/' + id);
  }

  showtransport(){
    return this.http.get<[Transport]>(this.transporturl);
  }

  postBooking(booking: Booking){
    return this.http.post<Booking>(this.bookingurl, booking);
  }

  getFare(){
    return this.http.get<Fares>(this.fareurl);
  }

  postpayments(payment: Payments){
    return this.http.post<Payments>(this.payment_url, payment);
  }

  makeTransfer(transfer: Transfer){
    return this.http.post<Transfer>(this.tranferurl, transfer);
  }
}
