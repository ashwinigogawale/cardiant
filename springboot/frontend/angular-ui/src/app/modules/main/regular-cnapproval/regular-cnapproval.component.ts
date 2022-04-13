import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../../services/excel.service';
import * as moment from 'moment';

@Component({
  selector: 'app-regular-cnapproval',
  templateUrl: './regular-cnapproval.component.html',
  styleUrls: ['./regular-cnapproval.component.scss']
})
export class RegularCNApprovalComponent implements OnInit {
  givendata;
  modalAdd= false;
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

//this.router.navigate(["../regularadd"],{relativeTo:this.route});

      }
}
