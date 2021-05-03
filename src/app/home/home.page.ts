import { Component } from '@angular/core';
import { DynamicInputService, User } from '../services/dynamic-input.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: User;
  constructor(private service: DynamicInputService,
              private route: Router) {}

  openpayments(){
    this.route.navigate(['/payments']);
  }

  opentransfers(){
    this.route.navigate(['/transfers']);
  }

  openbook(){
    this.route.navigate(['/booking']);
  }

  ngOnInit(){
    this.service.getAllpaymentData().subscribe(response => {
      console.log(response);
    });
  }

}
