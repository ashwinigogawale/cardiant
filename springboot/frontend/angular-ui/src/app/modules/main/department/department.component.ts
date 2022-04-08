import { Component, OnInit } from '@angular/core';

import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/api/department.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from './../../../services/excel.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  loading = false;
  public entryForm: FormGroup;
  rowSelected :any= {};
  givendata;
  modalAdd= false;
  modaledit=false;
  modaldelete=false;
  data1;




  constructor(
    private mainService: DepartmentService,
    private alertService: AlertService,
    private toastr: ToastrService,
    private excel: ExcelService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.mainService.getAll().subscribe((data) => {
      console.log(data);
      this.data1 = data;
      this.data1 = data.departmententity;

    });
    this.entryForm = this._fb.group({
      department_code:[null] ,
      description:[null] ,
      active:[null] ,
      created_by:[null] ,
      created_on:[null],
      updated_by:[null],
      updated_on:[null]

      });


  }
  onExport() {
    this.excel.exportAsExcelFile(this.data1, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  goToAdd(row) {
    this.rowSelected = row;
    this.modalAdd = true;
      }

   onSubmit() {
    this.modalAdd=false;
    this.mainService.create(this.entryForm.value).subscribe(data => {
      console.log(data)
      this.ngOnInit();

    },
      (error) => {
        console.log(error);
      }
    );
    if (this.entryForm.value) {
      this.toastr.success('Added successfully');

    }

      }

   goToEdit(row){
    this.rowSelected = row;
        this.modaledit=true;
      }
      onUpdate(id) {
        this.modaledit = false;
        this.mainService.update(id,this.rowSelected).subscribe(
          (data) => {
            console.log(data);
          },

        );
        if (id) {
          this.toastr.success('Updated successfully');
                }

    }

      onDelete(row) {
        this.rowSelected = row;
         this.modaldelete=true;
      }

      delete(id)
      {
        this.modaldelete = false;
        console.log("in delete  "+id);
        this.mainService.delete(id).subscribe(
          (data) => {
            console.log(data);
            this.ngOnInit();

          },
        );
        if (id) {
          this.toastr.success('Deleted successfully');
              }

      }
}
