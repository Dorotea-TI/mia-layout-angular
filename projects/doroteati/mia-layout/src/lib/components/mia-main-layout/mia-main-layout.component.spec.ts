import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaMainLayoutComponent } from './mia-main-layout.component';

describe('MiaMainLayoutComponent', () => {
  let component: MiaMainLayoutComponent;
  let fixture: ComponentFixture<MiaMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
