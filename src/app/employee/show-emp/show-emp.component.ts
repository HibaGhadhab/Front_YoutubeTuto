import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    // subscribe's methode makes sure to wait until the response of API's call is received
    // and assign value to department list variable
    // this is an asynchronious operation
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList = data;
    })
  }

}
