import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaListComponent } from './mia-list.component';

describe('MiaListComponent', () => {
  let component: MiaListComponent;
  let fixture: ComponentFixture<MiaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
