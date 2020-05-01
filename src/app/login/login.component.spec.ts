import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
    ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has correct header', () => {
    const value= fixture.debugElement.nativeElement.querySelector('label');
    expect(value.textContent).toContain('Sign in');
  });

  it('should set logged in to true when correct user name and password',()=>{
    const app= fixture.debugElement.componentInstance;
     app.mail = 'pkwatra96@gmail.com'
     app.password ='hello'
     app.onSubmit()
     fixture.detectChanges()
     expect(app.signIn).toEqual(true)
  })

  it('should set logged in to false when incorrect user name',()=>{
    const app= fixture.debugElement.componentInstance;
     app.mail = 'xyz'
     app.password ='hello'
     app.onSubmit()
     fixture.detectChanges()
     expect(app.signIn).toEqual(false)
  })

  it('should set logged in to false when incorrect password',()=>{
    const app= fixture.debugElement.componentInstance;
     app.mail = 'pkwatra96@gmail.com'
     app.password ='xyz'
     app.onSubmit()
     fixture.detectChanges()
     expect(app.signIn).toEqual(false)
  })

});
