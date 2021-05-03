import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { DynamicInputService, User } from '../services/dynamic-input.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  email: string;
  age: any;
  phone: any;
  password: string;
  userid: string = '1';

  user: User[];

  constructor(
    private service: DynamicInputService, 
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
    ) { }
  getuser(){

    this.service.getAllUserData().subscribe(response=> {
      this.user = response;
      console.log(this.user);
    })
  }

  ngOnInit() {
  }

}
