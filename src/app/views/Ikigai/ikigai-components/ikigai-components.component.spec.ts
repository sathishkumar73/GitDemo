import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkigaiComponentsComponent } from './ikigai-components.component';

describe('IkigaiComponentsComponent', () => {
  let component: IkigaiComponentsComponent;
  let fixture: ComponentFixture<IkigaiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkigaiComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkigaiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
