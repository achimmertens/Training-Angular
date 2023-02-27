import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsPageComponent } from './hero-details-page.component';

describe('HeroDetailsPageComponent', () => {
  let component: HeroDetailsPageComponent;
  let fixture: ComponentFixture<HeroDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
