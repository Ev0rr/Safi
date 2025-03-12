import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage {
  country: string = 'Mexico';
  countryCode: string = '+52';
  phoneNumber: string = '';
  
  constructor(private router: Router) {}

  redirectToVerifyCode() {
    this.router.navigate(['/verify-code']);
  }
}
