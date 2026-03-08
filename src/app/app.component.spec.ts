import {ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {delay, of} from 'rxjs';


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

    // tick(3000); // tick(ms) moves the virtual clock forward (simulate 3000 milliseconds passing)
    flush(); // insure that all async operation completed (with tich we can't guess how long it takes)
    fixture.detectChanges();

    expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnElements[0].nativeElement.disabled).toBeTrue();

    // tick(5000);

  }));


  it("should test the promise", fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      console.log("First Set Timeout")
      counter = counter + 2;
    }, 2000);

    setTimeout(() => {
      counter = counter + 3;
    }, 3000);

    Promise.resolve().then(() => {
      counter = counter + 1;
    });

    // flush();
    flushMicrotasks();
    expect(counter).toBe(1);

    tick(2000);
    expect(counter).toBe(3);

    tick(3000);
    expect(counter).toBe(6);

  }));

  ///// the test pass because it is a synchronous observable
  // it("should test the observable", () => {
  //   let isSubscribed = false;
  //   let myObs = of(isSubscribed);
  //   myObs.subscribe(() => {
  //     isSubscribed = true;
  //   });
  //   expect(isSubscribed).toBeTrue();
  // });

  //// Asynchronous observable (solved using tick)
  it("should test the observable", fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1000));
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(1000);
    expect(isSubscribed).toBeTrue();
  }));

});




/*
  `fixture` is the test wrapper around the component.
  `component` This is simply the component class instance.
  `DebugElement` is an Angular wrapper around a DOM element.
 */
