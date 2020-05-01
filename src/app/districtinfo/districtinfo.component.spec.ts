import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictinfoComponent } from './districtinfo.component';
import { DistrictUtilsService } from './districtutils.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DistrictinfoComponent', () => {
  let component: DistrictinfoComponent;
  let fixture: ComponentFixture<DistrictinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictinfoComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
    ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
