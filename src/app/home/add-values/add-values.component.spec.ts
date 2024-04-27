import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValuesComponent } from './add-values.component';

describe('AddValuesComponent', () => {
  let component: AddValuesComponent;
  let fixture: ComponentFixture<AddValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
