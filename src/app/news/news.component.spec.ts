import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewsComponent } from './news.component';
import { By } from '@angular/platform-browser';
import { NewsService } from './news.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers:[NewsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('news service should be created', () => {
    const app = fixture.debugElement.componentInstance;
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });

  it('should have get news function', () => {
    let newsService = fixture.debugElement.injector.get(NewsService);
    expect(newsService.getNews).toBeTruthy();
  });

});
