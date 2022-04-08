import { Component, OnInit } from '@angular/core';
import { demo } from 'src/app/models/demo';
import { AlertService } from 'src/app/services/alert.service';
import { DemoService } from 'src/app/services/api/demo.service';
import { ExcelService } from 'src/app/services/excel.service';
import * as moment from 'moment';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClrDatagridStateInterface } from '@clr/angular';
import { state } from '@angular/animations';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss']
})
export class FormbuilderComponent implements OnInit {
  loading = false;
  public entryForm: FormGroup;
  givendata;
  orders;
  modalAdd= false;
  totalpageno:any;
  currentpage:any;
  totalelements:any;
  pagesize:any;
page:number=0;
alldata;
  constructor(
    private mainService: DemoService,
    private alertService: AlertService,
    private toastr: ToastrService,
    private excel: ExcelService,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  setpage(i,event:any){
    if(i>=0){
      event.preventDefault();
    this.page=i;

    this.getData();
    }


  }
  ngOnInit(): void {
    //this.getData();
    this.getalldata();
   // this.refresh(this.currentPage);
  }
  getalldata(){
    this.mainService.getmaingrid().subscribe((data1)=>{
      console.log(data1);
      this.alldata=data1['content'];
      console.log(this.alldata)
    })

  }
  // getdataall(){
  //   let lastPage = sessionStorage.getItem("employee-current-page");
  //   if (lastPage) {
  //     this.currentPage = parseInt(lastPage);
  //   }
  // }
  // employees;
  // total;
  // currentPage;
  // lastState;
  // refresh(state: ClrDatagridStateInterface) {
  //   this.loading = true;
  //   this.lastState = state;
  //   sessionStorage.setItem("current-page", this.currentPage?.toString())

  //   this.mainService.getpage1(state).subscribe((result) => {
  //     console.log(result)
  //     console.log(state);
  //       this.employees = result.content;
  //       console.log(this.employees);
  //       this.total = result.totalElements;
  //       console.log(this.total);
  //       this.loading = false;
  //     },
  //     (error1) => {
  //       console.log(error1);
  //       this.loading = false;
  //     });
  // }
  getData() {
    this.mainService.getpage(this.page).subscribe((data) => {
      console.log(data);
      this.givendata = data['content'];
 this.totalpageno= data.totalPages;
 this.totalelements=data.totalElements;
 this.currentpage=data.currentPage;
 this.pagesize=data.pageSize;
      // for(let i =0;i<data.length;i++){
      //   // console.log(data[i]);
      //   // console.log(data[i].orderDetails);
      //   this.orders=(data[i].orderDetails);
      //   console.log(this.orders);
      // }


    });

    this.entryForm = this._fb.group({
      p_name:[null] ,
      p_position_descrition:[null] ,
      p_request_time:[null] ,
      a_name:[null] ,
      a_position_descrition:[null],
      a_request_time:[null],
      re_id:[null],
      re_invoice_no:[null],
      re_invoice_date:[null]

      });

  }

  goToEdit(id: number){
    this.router.navigate(["../form2/"+ id], { relativeTo: this.route });
  }

  onDelete(){

  }
  onExport() {
    this.excel.exportAsExcelFile(this.givendata, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  goToAdd() {

this.router.navigate(["../ncso"],{relativeTo:this.route});

      }


}
