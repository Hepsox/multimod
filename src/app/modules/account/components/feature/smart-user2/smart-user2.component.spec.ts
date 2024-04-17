import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartUser2Component } from './smart-user2.component';

describe('SmartUser2Component', () => {
  let component: SmartUser2Component;
  let fixture: ComponentFixture<SmartUser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartUser2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
