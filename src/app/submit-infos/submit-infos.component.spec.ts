import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInfosComponent } from './submit-infos.component';

describe('SubmitInfosComponent', () => {
  let component: SubmitInfosComponent;
  let fixture: ComponentFixture<SubmitInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
