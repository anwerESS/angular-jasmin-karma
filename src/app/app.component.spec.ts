// Import Angular testing utilities
import { TestBed } from '@angular/core/testing';
// Import the component we want to test
import { AppComponent } from './app.component';

// Group of tests for AppComponent
describe('AppComponent', () => {
  // Runs before each test
  beforeEach(async () => {
    // Create a temporary Angular testing module
    await TestBed.configureTestingModule({
      // Because AppComponent is a standalone component
      // we import it instead of declaring it
      imports: [AppComponent],
    })
      // Compile the component template and CSS
      // Angular prepares the component for testing
      .compileComponents(); // return a promise
  });


  // Test 1: Check if the component can be created
  it('should create the app', () => {
    // Create a component test environment
    const fixture = TestBed.createComponent(AppComponent);
    // Get the component class instance
    const app = fixture.componentInstance;
    // Verify the component exists
    expect(app).toBeTruthy();
  });


  // Test 2: Check a property of the component class
  it(`should have the 'angular-jasmine-karma' title`, () => {
    // Create component instance
    const fixture = TestBed.createComponent(AppComponent);
    // Access component class
    const app = fixture.componentInstance;
    // Verify the value of the "title" property
    expect(app.title).toEqual('angular-jasmine-karma');
  });


  // Test 3: Check the rendered HTML
  it('should render title', () => {
    // Create component
    const fixture = TestBed.createComponent(AppComponent);
    // Trigger Angular change detection
    // This renders the template
    fixture.detectChanges();
    // Get the real DOM element of the component
    const compiled = fixture.nativeElement as HTMLElement;
    // Search for the <h1> element
    const titleElement = compiled.querySelector('h1');
    // Check that the HTML contains the expected text
    expect(titleElement?.textContent)
      .toContain('Hello, angular-jasmine-karma');
  });

});
