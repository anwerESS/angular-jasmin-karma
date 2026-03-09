import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have correct content', () => {
    let pEl = el.queryAll(By.css('p'));
    expect(pEl[0].nativeElement.textContent).toBe("home works!");
    let btnEl = el.queryAll(By.css('.btn'));
    expect(btnEl[0].nativeElement.disabled).toBeTrue();

    // mandatory (tp trigger changes)because we set the data in the component
    fixture.detectChanges();
    let txtEl = el.queryAll(By.css('.title'));
    expect(txtEl[0].nativeElement.textContent).toBe("Angular Unit Testing");
  })

});
