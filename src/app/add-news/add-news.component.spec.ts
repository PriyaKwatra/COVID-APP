import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsComponent } from './add-news.component';
import { NewsService } from '../news/news.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers:[NewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add news on submit', () => {
    let newsService = fixture.debugElement.injector.get(NewsService);
    component = fixture.componentInstance;
    component.newsForm.value.title = "news"
    component.onSubmit();
    fixture.detectChanges();
    expect(newsService.getNews).toBeTruthy;
    expect(newsService.addNews).toBeTruthy;
  });

    it('news service should be created', () => {
      const app = fixture.debugElement.componentInstance;
      const service: NewsService = TestBed.get(NewsService);
      expect(service).toBeTruthy();
    });
  });
