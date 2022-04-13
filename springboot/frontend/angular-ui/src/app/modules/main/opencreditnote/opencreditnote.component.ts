import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../../services/excel.service';
import * as moment from 'moment';
@Component({
  selector: 'app-opencreditnote',
  templateUrl: './opencreditnote.component.html',
  styleUrls: ['./opencreditnote.component.scss']
})
export class OpencreditnoteComponent implements OnInit {
  givendata;
  loading = false;
  constructor(private excel: ExcelService,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  onExport() {
    this.excel.exportAsExcelFile(this.givendata, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  goToAdd() {

this.router.navigate(["../opencreditnoteadd"],{relativeTo:this.route});

      }
}
