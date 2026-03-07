import { TestBed } from '@angular/core/testing';
import {CalcService} from './calc.service';
import {SharedService} from '../shared/shared.service';


// xdescribe('CalcService', () => { // xdescribe (test is not executed)
//fdescribe('CalcService', () => { // fdescribe (focus only on that test)
describe('CalcService', () => {

  let sharedService: SharedService;
  let calcService: CalcService;

  beforeEach(() => {
    console.log("BEFORE EACH");
    //inject fake obj
    sharedService = jasmine.createSpyObj('sharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({
      providers: [CalcService,
        // When someone asks for SharedService → give this object instead
        {provide: SharedService, useValue: sharedService}
      ],
    });

    // sharedService = TestBed.inject(SharedService);
    calcService = TestBed.inject(CalcService);

  })

   // xit ("should multiply two numbers", () => { // xit (test is not executed)
   // fit ("should multiply two numbers", () => { // fit (focus only on that test)
  it ("should multiply two numbers", () => {
    const result = calcService.multiply(3, 5);
    expect(result).toBe(15);
  });

  it ("should add two numbers", () => {
    const result = calcService.add(3, 5);
    expect(result).toBe(8);
  });


});
