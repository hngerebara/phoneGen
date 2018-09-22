import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones.component';
import { InputComponent } from './input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PhonesComponent,
        InputComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hopeaz Random Phone Number Generator');
  }));
  
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hopeaz Random Phone Number Generator');
  }));
});
