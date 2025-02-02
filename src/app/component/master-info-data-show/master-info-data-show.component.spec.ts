import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterInfoDataShowComponent } from './master-info-data-show.component';

describe('MasterInfoDataShowComponent', () => {
  let component: MasterInfoDataShowComponent;
  let fixture: ComponentFixture<MasterInfoDataShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterInfoDataShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterInfoDataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
