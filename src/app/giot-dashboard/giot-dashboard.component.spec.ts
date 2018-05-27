
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiotDashboardComponent } from './giot-dashboard.component';

describe('GiotDashboardComponent', () => {
  let component: GiotDashboardComponent;
  let fixture: ComponentFixture<GiotDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiotDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiotDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
