import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../../services/excel.service';
import * as moment from 'moment';
import {AudittrailService} from '../../../services/api/audittrail.service';
@Component({
  selector: 'app-audit-trail-report',
  templateUrl: './audit-trail-report.component.html',
  styleUrls: ['./audit-trail-report.component.scss']
})
export class AuditTrailReportComponent implements OnInit {
  loading = false;
  givendata;
  fromdate:any;
todate:any;
tname=['ITEM_MASTER'];
  constructor( private router: Router,
    private route: ActivatedRoute,
    private excel: ExcelService,
    private mainservice:AudittrailService) { }

  ngOnInit(): void {
    this.getdata();
  }
  // getdata(){
  //   this.mainservice.getAll().subscribe((data)=>{
  //     this.givendata=data;
  //     console.log(this.givendata);
  //   },
  //   (error: any)=>{
  //     console.log('error in loading ...');

  //   }
  //   )
  // }
  onExport() {
    this.excel.exportAsExcelFile(this.givendata, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  getdata(){
    this.mainservice.gettable(this.tname).subscribe((data)=>{
      console.log(data);
      this.givendata=data.body;
    })
  }
  selectdate(){
    this.mainservice.getdate(this.fromdate,this.todate,this.tname).subscribe((data)=>{
      console.log(data);
      this.givendata=data.body;
    })
  }
}
