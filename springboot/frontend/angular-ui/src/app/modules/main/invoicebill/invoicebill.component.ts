import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/services/excel.service';
import * as moment from 'moment';
@Component({
  selector: 'app-invoicebill',
  templateUrl: './invoicebill.component.html',
  styleUrls: ['./invoicebill.component.scss']
})
export class InvoicebillComponent implements OnInit {
  loading = false;
  public entryForm: FormGroup;
  rowSelected :any= {};
  givendata;
  modalAdd= false;
  modaledit=false;
  modaldelete=false;
  data1;

  constructor(
    private toastr: ToastrService,
    private excel: ExcelService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  goToAdd() {
    //this.rowSelected = row;
    this.modalAdd = true;
      }
      onExport() {
        this.excel.exportAsExcelFile(this.data1, 'user_',
          moment().format('YYYYMMDD_HHmmss'))
      }
}
