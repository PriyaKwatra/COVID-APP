import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictinfoComponent } from './districtinfo.component';

describe('DistrictinfoComponent', () => {
  let component: DistrictinfoComponent;
  let fixture: ComponentFixture<DistrictinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
