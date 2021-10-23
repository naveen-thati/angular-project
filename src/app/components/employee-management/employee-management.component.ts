import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-management.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  formValue !: FormGroup;
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  employeeModelObject : EmployeeModel = new EmployeeModel;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      phoneNumber: [''],
      employeeType: ['']
    })
    this.getAllEmployee();
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postEmployeeDetails(){
    this.employeeModelObject.name = this.formValue.value.name;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.password = this.formValue.value.password;
    this.employeeModelObject.phoneNumber = this.formValue.value.phoneNumber;
    this.employeeModelObject.employeeType = this.formValue.value.employeeType;

    this.api.postEmployee(this.employeeModelObject)
    .subscribe(res=> {
      console.groupCollapsed(res);
      alert("Employee Added Successfully");
      this.getAllEmployee();
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Something Went Wrong")
    })
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }

  deleteEmployee(row: any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted")
      this.getAllEmployee();
    })
  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObject.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['phoneNumber'].setValue(row.phoneNumber);
    this.formValue.controls['employeeType'].setValue(row.employeeType);
  }

  updateEmployee(){
    this.employeeModelObject.name = this.formValue.value.name;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.password = this.formValue.value.password;
    this.employeeModelObject.phoneNumber = this.formValue.value.phoneNumber;
    this.employeeModelObject.employeeType = this.formValue.value.employeeType;

    this.api.updateEmployee(this.employeeModelObject, this.employeeModelObject.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })

  }
}
