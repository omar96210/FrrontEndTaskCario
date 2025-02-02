import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaganationComponentComponent } from './paganation-component.component';

describe('PaganationComponentComponent', () => {
  let component: PaganationComponentComponent;
  let fixture: ComponentFixture<PaganationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaganationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaganationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
