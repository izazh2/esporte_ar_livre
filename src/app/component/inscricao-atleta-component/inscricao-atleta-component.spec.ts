import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoAtletaComponent } from './inscricao-atleta-component';

describe('InscricaoAtletaComponent', () => {
  let component: InscricaoAtletaComponent;
  let fixture: ComponentFixture<InscricaoAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaoAtletaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InscricaoAtletaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
