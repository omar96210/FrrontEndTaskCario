import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterInformationComponentComponent } from './master-information-component.component';

describe('MasterInformationComponentComponent', () => {
  let component: MasterInformationComponentComponent;
  let fixture: ComponentFixture<MasterInformationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterInformationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterInformationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
