import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-customers-orders',
  templateUrl: './customers-orders.component.html',
  styleUrls: ['./customers-orders.component.scss']
})
export class CustomersOrdersComponent implements OnInit {
  public northwindCustomers: any[] = [];
  public northwindOrders: any[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    //this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    //this.northwindService.getData('Orders').subscribe(data => this.northwindOrders = data);

    this.northwindService.getCustomers().subscribe(data => {
      this.northwindCustomers = data;
    });
  }

  rowSelected(selection: any){
    const customerId = selection[0].CustomerID;
    //this.northwindOrders = this.northwindService.getOrders(customerId);
    this.northwindService.getOrders(customerId).subscribe(data => {
      this.northwindOrders = data;
    });
  }
}
