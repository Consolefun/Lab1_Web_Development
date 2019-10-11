import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureDesignComponent } from './architecture-design.component';

describe('ArchitectureDesignComponent', () => {
  let component: ArchitectureDesignComponent;
  let fixture: ComponentFixture<ArchitectureDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
