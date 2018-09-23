import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesComponent } from './phones.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component, DebugElement } from '@angular/core';
import { InputComponent } from '../input/input.component';

describe('PhonesComponent', () => {
  let component: PhonesComponent;
  let fixture: ComponentFixture<PhonesComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesComponent, InputComponent ],
      imports: [
        BrowserModule,
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('#phonenumbers'));
    element  = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create an instance of Phone',() => {
    expect(new PhonesComponent()).toBeTruthy();
  });

  it('should set default values', () => {
    expect(component.phoneNumbers.length).toEqual(0);
    expect(component.min).toEqual(0);
    expect(component.max).toEqual(0);
    expect(component.total).toEqual(0);
    expect(component.limit).toEqual(0);
    expect(component.error).toEqual(false);
    expect(component.message).toEqual("The limit execeeds allowed length. Please try again");
    expect(component.buttonTitles.generate).toEqual("Generate");
    expect(component.buttonTitles.saveFile).toEqual("Export");
    expect(component.buttonTitles.viewStats).toEqual("View Statistics");
    expect(component.viewStats).toEqual(false);
    expect(component.openInput).toEqual(false);
  });

  it('should generate random numbers', () => {
    let limit = 5;
    expect(component.getRandomPhoneNumbers(limit)).toBeDefined();
    expect(component.phoneNumbers.length).not.toBeNull();
    expect(component.phoneNumbers.length).toEqual(5);
  });

  it('should return an error if number exceeds file size', () => {
    let limit = 400000;
    expect(component.getRandomPhoneNumbers(limit)).toBeDefined();
    expect(component.phoneNumbers.length).toBe(0);
    expect(component.error).toEqual(true);
  });

  it('should get statistics', () => {
    let limit = 4;
    expect(component.getRandomPhoneNumbers(limit)).toBeDefined();
    fixture.debugElement.query(By.css('#getStats')).triggerEventHandler('click', null);
    expect(component.getStats).toBeTruthy();
    expect(component.viewStats).toEqual(true);

    let min = Math.min(...component.phoneNumbers);
    let max = Math.max(...component.phoneNumbers);
    expect(min).toEqual(component.min);
    expect(max).toEqual(component.max);
    expect(component.total).toEqual(component.phoneNumbers.length);
  });

  it('should sort phone numbers', () => {
    let limit = 4;
    expect(component.getRandomPhoneNumbers(limit)).toBeDefined();
    expect(component.sortNumbers('Ascending')).toHaveBeenCalled;
    let asc = component.phoneNumbers.sort((a,b) => 0 - (a > b ? -1 : 1));
    expect(component.sortNumbers('Descending')).toHaveBeenCalled;
    let dsc = component.phoneNumbers.sort((a,b) => 0 - (a > b ? 1 : -1));
    expect(dsc).toEqual(component.phoneNumbers);
  });

  it('should export file', () => {
    let limit = 4;
    expect(component.getRandomPhoneNumbers(limit)).toBeDefined();
    fixture.debugElement.query(By.css('#saveFile')).triggerEventHandler('click', null);
    expect(component.saveFile).toBeTruthy();
  });

});
