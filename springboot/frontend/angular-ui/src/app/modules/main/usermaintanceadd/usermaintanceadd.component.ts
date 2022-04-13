import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsermaintanceService } from '../../../services/api/usermaintance.service';
import { DemoService } from '../../../services/api/demo.service';
@Component({
  selector: 'app-usermaintanceadd',
  templateUrl: './usermaintanceadd.component.html',
  styleUrls: ['./usermaintanceadd.component.scss']
})
export class UsermaintanceaddComponent implements OnInit {
  public entryForm: FormGroup;
  customer:boolean=false;
  department:boolean=false;
  position:boolean=false;
  custdata: any;
  loading = false;
  clickedID:number;
  custiddata: any;
  userobjcust={
    customerName:'',
    customerCode:'',
  }
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
  constructor( private _fb: FormBuilder,
    private mainservice:UsermaintanceService,
    private customerservice:DemoService) { }

  ngOnInit(): void {
    this.entryForm = this._fb.group({

      username:[null] ,
      userPassw:[null] ,
      confirmPassword:[null],
      title:[null],
      shortName:[null],
      fullName:[null],
      status:[null],
      positionCodeString:[null],
      departmentCodeString:[null],
      usrGrpId:[null],
      customerId:[null],
      email:[null],
      notification:[null],

      //departmentCode: this._fb.array([this.department()]),
     // positionCode: this._fb.array([this.position()]),
      //usrGrp: this._fb.array([this.user()]),

      });
  }
  // department(){
  //   return this._fb.group({
  //     departmentCode:[null] ,

  //   });
  // }
  // position(){
  //   return this._fb.group({
  //     positionCode:[null] ,

  //   });
  // }
  // user(){
  //   return this._fb.group({
  //     usrGrp:[null] ,

  //   });
  //}
  onSubmit(){
    this.mainservice.create(this.entryForm.value).subscribe(data => {
      console.log(data)
    },
      (error) => {
        console.log(error);
      }
    );
    //this.router.navigate(["../usermaintance"], { relativeTo: this.route });
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
