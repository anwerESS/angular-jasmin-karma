import { TestBed } from '@angular/core/testing';
import {CalcService} from './calc.service';
import {SharedService} from '../shared/shared.service';


describe('CalcService', () => {

  let sharedService: SharedService;
  let calcService: CalcService;

  beforeEach(() => {
    console.log("BEFORE EACH");
    TestBed.configureTestingModule({
      providers: [CalcService, SharedService],
    });

    sharedService = TestBed.inject(SharedService);
    calcService = TestBed.inject(CalcService);

  })

  it ("should multiply two numbers", () => {
    const result = calcService.multiply(3, 5);
    expect(result).toBe(15);
  });

  it ("should add two numbers", () => {
    const result = calcService.add(3, 5);
    expect(result).toBe(8);
  });


});
