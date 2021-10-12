import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule, IgxActionStripModule } from 'igniteui-angular';
import { CustomersOrdersComponent } from './customers-orders.component';

describe('CustomersOrdersComponent', () => {
  let component: CustomersOrdersComponent;
  let fixture: ComponentFixture<CustomersOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersOrdersComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
