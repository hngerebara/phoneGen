import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  @Output() buttonClicked: EventEmitter<number> = new EventEmitter<number>();

  limitValue: number;
  clearSearch: ''
  

  limitEntered(){
    this.buttonClicked.emit(this.limitValue);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
