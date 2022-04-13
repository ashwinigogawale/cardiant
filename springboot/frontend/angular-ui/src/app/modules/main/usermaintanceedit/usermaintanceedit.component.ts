import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsermaintanceService } from '../../../services/api/usermaintance.service';
//import { Usermain } from 'src/app/models/usermaintaince';
import { DemoService } from '../../../services/api/demo.service';
@Component({
  selector: 'app-usermaintanceedit',
  templateUrl: './usermaintanceedit.component.html',
  styleUrls: ['./usermaintanceedit.component.scss']
})
export class UsermaintanceeditComponent implements OnInit {
  id:number;
  data1:any={};
  customer:boolean=false;
  custdata: any;
  clickedID:number;
  custiddata: any;
  loading = false;
  userobjcust={
    customerName:'',
    customerCode:'',
  }
  department:boolean=false;
  departmentdata: any;
  positiondata: any;
  deptiddata: any;
  userobjdept={
    departmentCode:'',
  }
  userobjpos={
    positionCode:'',
  }
  posiddata: any;
  position:boolean=false;
  constructor(private route:ActivatedRoute,
    private mainservice:UsermaintanceService,
    private customerservice:DemoService
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);
  }
getById(id:number){
this.mainservice.getbyid(id).subscribe((data)=>{
  this.data1=data;
 // this.data1=this.data3;
  console.log(this.data1);
});
}
update(){
  console.log(this.data1);
  this.mainservice.update(this.data1).subscribe((data)=>{
//console.log(data);
  });

}
gotocustomerid(){
  this.customer=!this.customer;
  this.customerservice.getallcustomer().subscribe((data) => {
    console.log(data);
    this.custdata = data;
       });
  }
  getcustID(id:number){
    this.clickedID=id;
  console.log("clicked by id"+ id);
  this.customerservice.getbycustid(id).subscribe((data) => {
    console.log(data);
    this.custiddata= data;
   // this.userObj= this.custiddata;
    this.userobjcust =this.custiddata;


    });
    this.customer=false;

  }
  gotodepartmet(){
    this.department=!this.department;
    this.mainservice.getalldepartment().subscribe((data)=>{
      console.log(data);
      this.departmentdata=data;
    });
  }
  getdepid(id:number){
    this.clickedID=id;
    console.log("clicked by id"+ id);
    this.mainservice.getbydepartmentid(id).subscribe((data) => {
      console.log(data);
      this.deptiddata= data;
     // this.userObj= this.custiddata;
      this.userobjdept =this.deptiddata;


      });
      this.department=false;
  }
  gotoposition(){
    this.position=!this.position;
    this.mainservice.getallposition().subscribe((data)=>{
      console.log(data);
      this.positiondata=data;
    })
  }
  getposid(id:number){
    this.clickedID=id;
    console.log("clicked by id"+ id);
    this.mainservice.getbypositionid(id).subscribe((data) => {
      console.log(data);
      this.posiddata= data;
     // this.userObj= this.custiddata;
      this.userobjpos =this.posiddata;


      });
      this.position=false;
  }
}
