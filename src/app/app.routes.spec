import {Router} from "@angular/router";
import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {InfoComponent} from "./info/info.component";
import {HomeComponent} from "./home/home.component";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "./app.routes";
import {AppComponent} from "./app.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe("App Routing", () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let homeFixture: ComponentFixture<HomeComponent>;
  let infoFixture: ComponentFixture<InfoComponent>;
  let el : DebugElement;
  let btnEl : DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, HomeComponent, InfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(AppComponent);
    homeFixture = TestBed.createComponent(HomeComponent);
    infoFixture = TestBed.createComponent(InfoComponent);
    el = homeFixture.debugElement;
    btnEl = infoFixture.debugElement;
  });

  it("should navigate to the default path = home", waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.pathname).toBe('/home');
    });
  }));

  it("should navigate to info on clicking the link in home component", waitForAsync(() => {
    homeFixture.detectChanges();
    let links = el.queryAll(By.css('a'));
    links[0].nativeElement.click();
    homeFixture.whenStable().then(() => {
      expect(location.pathname).toBe('/info');
    })
  }));

  it("should navigate to info on clicking the button in info component", waitForAsync(() => {
    infoFixture.detectChanges();
    let btns = el.queryAll(By.css('button'));
    btns[0].nativeElement.click();
    // `whenStable()` wait until all asynchronous tasks are finished (Navigation does not happen instantly)
    infoFixture.whenStable().then(() => {
      expect(location.pathname).toBe('/home');
    })
  }));


});
