import { TestBed } from '@angular/core/testing';
import {CalcService} from './calc.service';
import {SharedService} from '../shared/shared.service';


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

  it ("should multiply two numbers", () => {
    const result = calcService.multiply(3, 5);
    expect(result).toBe(15);
  });

  it ("should add two numbers", () => {
    const result = calcService.add(3, 5);
    expect(result).toBe(8);
  });


});
