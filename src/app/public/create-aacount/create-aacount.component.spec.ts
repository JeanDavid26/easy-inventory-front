import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAacountComponent } from './create-aacount.component';

describe('CreateAacountComponent', () => {
  let component: CreateAacountComponent;
  let fixture: ComponentFixture<CreateAacountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAacountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAacountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
