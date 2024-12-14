import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempletComponent } from './ng-templet.component';

describe('NgTempletComponent', () => {
  let component: NgTempletComponent;
  let fixture: ComponentFixture<NgTempletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTempletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTempletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
