import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDesignComponent } from './fashion-design.component';

describe('FashionDesignComponent', () => {
  let component: FashionDesignComponent;
  let fixture: ComponentFixture<FashionDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
