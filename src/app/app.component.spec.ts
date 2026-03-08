import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

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

  // it('should render a button with text subscribe', () => {
  //   const btnElements = el.queryAll(By.css('.subscribe'));
  //   component.isSubscribed = false;
  //   component.btnText = "Subscribe";
  //   fixture.detectChanges();
  //   expect(btnElements[0].nativeElement.textContent).toBe("Subscribe");
  //   expect(btnElements[0].nativeElement.disabled).toBeFalse();
  // });

  it('should render a button with text subscribed and the button should be disabled after clicked', fakeAsync(() => { // fakeAsync creates a fake asynchronous zone (With fakeAsync, Angular replaces the real timers with a virtual clock)
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    // Trigger click
    btnElements[0].nativeElement.click();

    // Simulated asynchronous blocks
    setTimeout(() => {
      console.log("Some other test cases");
    }, 8000);

    setTimeout(() => {
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe'));
    }, 3000);

    tick(3000); // tick(ms) moves the virtual clock forward (simulate 3000 milliseconds passing)
    fixture.detectChanges();

    expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnElements[0].nativeElement.disabled).toBeTrue();

    tick(5000);

  }));

});


/*
  `fixture` is the test wrapper around the component.
  `component` This is simply the component class instance.
  `DebugElement` is an Angular wrapper around a DOM element.
 */
