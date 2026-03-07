import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {USERS} from './mock-data-users';

describe('DataService', () => {
  let service: DataService;
  let testingController : any;

  beforeEach(() => {
    TestBed.configureTestingModule({ // create a fake Angular module for the test environment. (builds a temporary testing module)
      imports: [HttpClientTestingModule], // because data service uses HttpClient
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    testingController.verify(); // verify no other requests were made
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(6);
      const secondUser  = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe("Elena");
    });

    const mockReq = testingController.expectOne("api/users"); // capture the HTTP request
    expect(mockReq.request.method).toEqual("GET"); // verify request type
    mockReq.flush(Object.values(USERS)); // simulate server response

    /*
    Full test flow
      service.getAllUsers()
              ↓
      HttpClient sends GET request
              ↓
      HttpTestingController intercepts it
              ↓
      expectOne("api/users") captures it
              ↓
      flush(data) simulates server response
              ↓
      subscribe() receives the data
    */
  })

  it('should get user by id', () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe("John");
    });

    const mockReq = testingController.expectOne("api/users/1");
    expect(mockReq.request.method).toEqual("GET");
    mockReq.flush(USERS['1']);
  })

  it('should update user by id', () => {
    const changes = {age: 24};
    service.updateUser(1, changes).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.id).toBe(1);
    });

    const mockReq = testingController.expectOne("api/users/1");
    expect(mockReq.request.method).toEqual("PUT");
    const modifiedUser = USERS['1'];
    modifiedUser.age = 24;
    expect(mockReq.request.body.age).toEqual(changes.age);
    mockReq.flush(modifiedUser);
  })


});


/*
beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [],  // modules
    providers: [], // services
    declarations: [] // components/pipes/directives
  });
});
 */
