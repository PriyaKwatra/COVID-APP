import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GetService } from '../get.service';
import { DistrictinfoComponent } from './districtinfo.component';


describe('DistrictinfoComponent', () => {
  let component: DistrictinfoComponent;
  let fixture: ComponentFixture<DistrictinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictinfoComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [GetService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
