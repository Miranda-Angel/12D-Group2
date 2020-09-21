import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'], 
})
export class AboutPage {
  loanAmount: number;
  loanTerm: number;
  interestRate: number;
  interestPayable: number;
  totalAmount: number;
  monthlyPayment: number;

  constructor(public navCtrl: NavController) {
  }

  compute() {
    this.interestPayable = ((this.loanAmount * this.interestRate / 100) * this.loanTerm);
    this.totalAmount = (this.loanAmount*1 + this.interestPayable*1);
    this.monthlyPayment = (this.totalAmount / this.loanTerm);
  }

}
