// Import Angular testing utilities
// ComponentFixture is the testing wrapper around a component
// TestBed creates a fake Angular module for the test environment
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Import the component we want to test
import { HomeComponent } from './home.component';

// Define a test suite for HomeComponent
describe('HomeComponent', () => {
  // Variable that will store the component class instance
  let component: HomeComponent;
  // Variable that will store the fixture (test environment for the component)
  let fixture: ComponentFixture<HomeComponent>;
  // Runs before each test
  beforeEach(async () => {
    // Configure a temporary Angular testing module
    // Similar to a mini AppModule used only for the test
    await TestBed.configureTestingModule({
      // Because HomeComponent is a standalone component
      // we import it instead of declaring it
      imports: [HomeComponent]
    })
      // Compile the component template and styles
      // Angular prepares the component for rendering
      .compileComponents();

    // Create the component instance inside the testing environment
    fixture = TestBed.createComponent(HomeComponent);
    // Get the component class instance from the fixture
    component = fixture.componentInstance;
    // Trigger Angular change detection
    // This renders the template and runs lifecycle hooks like ngOnInit()
    fixture.detectChanges();
  });


  // Define a test case
  it('should create', () => {
    // Verify that the component instance exists
    expect(component).toBeTruthy();
  });

});
