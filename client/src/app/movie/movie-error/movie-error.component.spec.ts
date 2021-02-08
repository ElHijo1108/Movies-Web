import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieErrorComponent } from './movie-error.component';

describe('MovieErrorComponent', () => {
  let component: MovieErrorComponent;
  let fixture: ComponentFixture<MovieErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
