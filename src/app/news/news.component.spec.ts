import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { By } from '@angular/platform-browser';
import { NewsService } from './news.service';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ]
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

  it('should properly initialise data', () => {
    const app= fixture.debugElement.componentInstance;
    expect(app.news[0].title).toEqual("Health Ministry issued guidelines");
  });

  it('should intialise the news', () => {
    let newsService = fixture.debugElement.injector.get(NewsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(newsService.news.length).toEqual(4);
  });

});
