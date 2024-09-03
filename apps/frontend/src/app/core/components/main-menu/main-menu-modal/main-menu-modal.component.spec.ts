import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuModalComponent } from './main-menu-modal.component';

describe('MainMenuModalComponent', () => {
  let component: MainMenuModalComponent;
  let fixture: ComponentFixture<MainMenuModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMenuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
