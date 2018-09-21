import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  constructor() {}

  phoneNumbers = [];
  min: number = 0;
  max: number = 0;
  total: number = 0;
  limit: number = 0;
  error: boolean = false;
  message = "The limit execeeds allowed length. Please try again"

  buttonTitles: any = {
    generate: "Generate",
    saveFile: "Export",
    viewStats: "View Statistics"
  }

  viewStats: boolean = false;
  openInput: boolean = false;

  ngOnInit() {}

  getRandomPhoneNumbers(limit){ 
    if(limit > 10) return this.error = true; 
    this.phoneNumbers = [];
    this.message = '';  
    let phoneNumber: number = 0;
    while(phoneNumber < limit){
      this.phoneNumbers.push('0' + Math.floor(Math.random() * 900000000 + 100000000));
      phoneNumber ++
    }
    return this.phoneNumbers; 
  }

  getStats(){
    this.viewStats = true;
    this.min = Math.min(...this.phoneNumbers);
    this.max = Math.max.apply(null, this.phoneNumbers);
    this.total = this.phoneNumbers.length;    
  }

}



