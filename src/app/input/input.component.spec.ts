import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { PhonesComponent } from '../phones/phones.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { Component } from '@angular/core';

describe('PhonesComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [
        BrowserModule,
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    element  = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();
  });

  it('should create an instance of Input',() => {
    expect(new InputComponent()).toBeTruthy();
  });

  it('should emit enter limit and click button', () => {
    const inputEle = fixture.nativeElement.querySelector('input');
    inputEle.value = 3;
    fixture.detectChanges();
    inputEle.dispatchEvent(new Event('input'));
    const event = new KeyboardEvent("keypress",{"key": "Enter"});
    inputEle.dispatchEvent(event);
    const buttonEle = fixture.nativeElement.querySelector('button');
    buttonEle.click();
    expect(component.buttonClicked).toBeTruthy();
    expect(component.numberOnly).toBeDefined();
    expect(component.limitValue).not.toBeNull();
  });
});
