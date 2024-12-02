import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteratividadeComponent } from './interatividade.component';

describe('InteratividadeComponent', () => {
  let component: InteratividadeComponent;
  let fixture: ComponentFixture<InteratividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteratividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteratividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
