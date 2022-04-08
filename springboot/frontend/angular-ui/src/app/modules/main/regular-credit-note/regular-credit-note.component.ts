import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';
import * as moment from 'moment';
@Component({
  selector: 'app-regular-credit-note',
  templateUrl: './regular-credit-note.component.html',
  styleUrls: ['./regular-credit-note.component.scss']
})
export class RegularCreditNoteComponent implements OnInit {
givendata;
modalAdd= false;
loading = false;
  constructor(
    private excel: ExcelService,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
  onExport() {
    this.excel.exportAsExcelFile(this.givendata, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  goToAdd() {
this.router.navigate(["../regularadd"],{relativeTo:this.route});

      }
      newrecord(){
        this.modalAdd=!this.modalAdd;
      }
}
