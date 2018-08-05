import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicWindowComponent } from './music-window.component';

describe('MusicWindowComponent', () => {
  let component: MusicWindowComponent;
  let fixture: ComponentFixture<MusicWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
