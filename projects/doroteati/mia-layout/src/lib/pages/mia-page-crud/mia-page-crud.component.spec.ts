import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPageCrudComponent } from './mia-page-crud.component';

describe('MiaPageCrudComponent', () => {
  let component: MiaPageCrudComponent;
  let fixture: ComponentFixture<MiaPageCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPageCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPageCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
