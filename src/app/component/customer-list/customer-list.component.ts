import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];
  customerObj: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  };
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mobile: string = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.data.getAllCustomers().subscribe(res => {
      this.customerList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching customer data')
    })
  }

  resetForm() {
    this.id = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.mobile = '';
  }

  addCustomer() {
    if (this.firstName == '' || this.lastName == '' || this.email == '' || this.mobile == '') {
      alert('Fill all input fields');
      return;
    }

    this.customerObj.id = '';
    this.customerObj.firstName = this.firstName;
    this.customerObj.lastName = this.lastName;
    this.customerObj.email = this.email;
    this.customerObj.mobile = this.mobile;

    this.data.addCustomer(this.customerObj);
    this.resetForm();
  }

  updateCustomer() {
    
  }

  deleteCustomer(customer: Customer) {
    if (window.confirm('Are you sure you want to delete ' + customer.firstName + ' ' + customer.lastName + ' ?')) {
      this.data.deleteCustomer(customer);
    }

  }

}
