import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaLayoutComponent } from './mia-layout.component';

describe('MiaLayoutComponent', () => {
  let component: MiaLayoutComponent;
  let fixture: ComponentFixture<MiaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
