import {ComponentFixture, TestBed} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>; // Angular test wrapper
  let el: DebugElement; // Angular DOM helper
  let component: AppComponent; // component class instance

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    el = fixture.debugElement;
    component = fixture.componentInstance;

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render a button with text subscribe', () => {
    const btnElements = el.queryAll(By.css('.subscribe'));
    component.isSubscribed = false;
    component.btnText = "Subscribe";
    fixture.detectChanges();

    expect(btnElements[0].nativeElement.textContent).toBe("Subscribe");
    expect(btnElements[0].nativeElement.disabled).toBeFalse();
  });

  it('should render a button with text subscribed and the button should be disabled after clicked', () => {
    const btnElements = el.queryAll(By.css('.subscribe'));
    component.isSubscribed = false;
    component.btnText = "Subscribe";
    btnElements[0].nativeElement.click();
    fixture.detectChanges();

    expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnElements[0].nativeElement.disabled).toBeTrue();
  });

});


/*
  `fixture` is the test wrapper around the component.
  `component` This is simply the component class instance.
  `DebugElement` is an Angular wrapper around a DOM element.
 */
