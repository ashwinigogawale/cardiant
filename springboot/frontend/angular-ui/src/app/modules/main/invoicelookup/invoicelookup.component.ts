import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExcelService } from '../../../services/excel.service';
import * as moment from 'moment';

@Component({
  selector: 'app-invoicelookup',
  templateUrl: './invoicelookup.component.html',
  styleUrls: ['./invoicelookup.component.scss']
})
export class InvoicelookupComponent implements OnInit {
  loading = false;
  public entryForm: FormGroup;
  rowSelected :any= {};
  givendata;
  modalAdd= false;
  modaledit=false;
  modaldelete=false;
  data1;
  constructor(
    private excel: ExcelService,
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
