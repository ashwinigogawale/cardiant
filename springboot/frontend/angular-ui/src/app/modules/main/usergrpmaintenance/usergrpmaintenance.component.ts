import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';
import * as moment from 'moment';
import { UsergrpmaintainceService } from 'src/app/services/api/usergrpmaintaince.service';
@Component({
  selector: 'app-usergrpmaintenance',
  templateUrl: './usergrpmaintenance.component.html',
  styleUrls: ['./usergrpmaintenance.component.scss']
})
export class UsergrpmaintenanceComponent implements OnInit {
  loading = false;
  public entryForm: FormGroup;
  givendata;
  orders;
  modalAdd= false;
  modaledit=false;
  rowSelected :any= {};
  constructor(
    private excel: ExcelService,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private mainservice:UsergrpmaintainceService,
  ) { }

  ngOnInit(): void {
    this.mainservice.getAll().subscribe((data) => {
      console.log(data);
      this.givendata = data;
    });

    this.entryForm = this._fb.group({
      groupName:[null] ,
      groupDesc:[null] ,
      groupLevel:[null] ,
      status:[null] ,

      });
  }
  onExport() {
    this.excel.exportAsExcelFile(this.givendata, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  goToAdd() {
    this.modalAdd=true;
    //this.router.navigate(["../usermaintanceadd"],{relativeTo:this.route});
    }
  goToEdit(row){
    this.rowSelected = row;
    this.modaledit=true;
        //this.router.navigate(["../usermaintanceedit/"+ id], { relativeTo: this.route });
      }
      onUpdate(id) {
        this.modaledit = false;
           //console.log("in update");
        console.log("id  "+id);
        console.log( this.rowSelected );
        //console.log("out update");
        this.mainservice.update(this.rowSelected).subscribe(
          (data) => {
            console.log(data);
          },
        );
    }
    onSubmit() {
      console.log(this.entryForm.value);

      if (this.entryForm.invalid) {
        return;
      }
      this.onCreate();
    }
    onCreate() {
        this.modalAdd=false;
       this.mainservice.create(this.entryForm.value).subscribe(data => {
         console.log(data)
         this.ngOnInit();

       },
         (error) => {
           console.log(error);
         }
       );
      //  if (this.entryForm.value) {
      //    this.toastr.success('Added successfully');

      //  }
     }

}
