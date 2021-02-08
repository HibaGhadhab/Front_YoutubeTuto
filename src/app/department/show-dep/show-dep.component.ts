import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];  

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  dep:any;


  // first methode to execute when this component is in scope
  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    console.log("clicked!");
    this.dep={
      DepartmentId:0,
      DepartmentName:"hiba dep"
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }

  refreshDepList(){
    // subscribe's methode makes sure to wait until the response of API's call is received
    // and assign value to department list variable
    // this is an asynchronious operation
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList = data;
    })
  }

}
