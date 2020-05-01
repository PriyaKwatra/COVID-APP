import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsComponent } from './add-news.component';
import { NewsService } from '../news/news.service';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsComponent ]
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
    expect(newsService.news.length).toEqual(5);
  });

  it('should intialise the news', () => {
    let newsService = fixture.debugElement.injector.get(NewsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(newsService.news.length).toEqual(4);
  });


});