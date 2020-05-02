import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GetService } from '../get.service';
import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [GetService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Get service should be created', () => {
    const app = fixture.debugElement.componentInstance;
    const service: GetService = TestBed.get(GetService);
    expect(service).toBeTruthy();
  });

  it('should call get method on initialise', () => {
    const app = fixture.debugElement.componentInstance;
    const service: GetService = TestBed.get(GetService);
    expect(service.getIndiaStatus).toBeTruthy();
  });

  

});
