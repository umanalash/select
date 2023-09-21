import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildselectComponent } from './childselect.component';

describe('ChildselectComponent', () => {
  let component: ChildselectComponent;
  let fixture: ComponentFixture<ChildselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildselectComponent]
    });
    fixture = TestBed.createComponent(ChildselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
