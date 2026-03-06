import { TestBed } from '@angular/core/testing';
import {SharedService} from '../shared/shared.service';
import {CalcService} from './calc.service';


describe('CalcService', () => {

  // it ("should multiply two numbers", () => {
  //   const sharedService = new SharedService();
  //   const calcService = new CalcService(sharedService);
  //   const result = calcService.multiply(3, 5);
  //   expect(result).toBe(15);
  // });


  it("should call mySharedFunction func", () => {
    const shared = new SharedService();
    const calc = new CalcService(shared);
    spyOn(shared, 'mySharedFunction'); // It creates a spy and It replaces the original function with an empty fake function
    // spyOn(shared, 'mySharedFunction').and.callThrough(); // the spy tracks the function, the real implementation still runs
    const result = calc.multiply(3, 5);
    expect(shared.mySharedFunction).toHaveBeenCalled();
  });

});
