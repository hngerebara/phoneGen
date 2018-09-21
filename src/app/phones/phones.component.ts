import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  constructor() {

  }

  phoneNumbers = [];
  min: number = 0;
  max: number = 0;
  total: number = 0;
  limit: number = 10;

  buttonTitles: any = {
    generate: "Generate",
    saveFile: "Export",
    viewStats: "View Statistics"
  }

  viewStats: boolean = false;

  ngOnInit() {}

  getRandomPhoneNumbers(){  
    this.phoneNumbers = [];  
    let phoneNumber: number = 0;
    while(phoneNumber < 10){
      this.phoneNumbers.push(Math.floor(Math.random() * 9000000000 + 1000000000));
      phoneNumber ++
    }
    return this.phoneNumbers; 
  }
}



