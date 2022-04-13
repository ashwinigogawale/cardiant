import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ExcelService } from '../../../services/excel.service';
import { NcsoapproService } from '../../../services/api/ncsoappro.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
givendata:any;
modalAdd= false;
loading = false;

  constructor(private excel: ExcelService,
    private route:ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
    private mainservice:NcsoapproService) { }

  ngOnInit(): void {
    this.mainservice.getAll1().subscribe((data) => {
      console.log(data);
      this.givendata = data;
    });
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.givendata = event.target.value;
  }
  onExport() {
    this.excel.exportAsExcelFile(this.givendata, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }

      goToEdit(id: number){
        this.router.navigate(["../ncsoread/"+ id], { relativeTo: this.route });
      }
}
