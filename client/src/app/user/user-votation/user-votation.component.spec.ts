import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVotationComponent } from './user-votation.component';

describe('UserVotationComponent', () => {
  let component: UserVotationComponent;
  let fixture: ComponentFixture<UserVotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
