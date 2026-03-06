import { TestBed } from '@angular/core/testing';
import {CalcService} from './calc.service';


describe('CalcService', () => {

  it ("should multiply two numbers", () => {
    const calcService = new CalcService();
    const result = calcService.multiply(3, 5);
    expect(result).toBe(15);
  })

});
