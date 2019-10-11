import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDesignComponent } from './interior-design.component';

describe('InteriorDesignComponent', () => {
  let component: InteriorDesignComponent;
  let fixture: ComponentFixture<InteriorDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
