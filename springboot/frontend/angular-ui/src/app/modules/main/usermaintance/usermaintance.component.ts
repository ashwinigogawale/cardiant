import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';
import * as moment from 'moment';
import { UsermaintanceService } from 'src/app/services/api/usermaintance.service';
@Component({
  selector: 'app-usermaintance',
  templateUrl: './usermaintance.component.html',
  styleUrls: ['./usermaintance.component.scss']
})
export class UsermaintanceComponent implements OnInit {
  loading = false;
  public entryForm: FormGroup;
  givendata;
  orders;
  modalAdd= false;
  modaledit=false;
  constructor(private excel: ExcelService,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private mainservice:UsermaintanceService) { }

  ngOnInit(): void {
    this.getData();

     }
  getData(){
    this.mainservice.getAll().subscribe((data) => {
      console.log(data);
      this.givendata = data;

      // for(let i =0;i<data.length;i++){
      //   // console.log(data[i]);
      //   // console.log(data[i].orderDetails);
      //   this.orders=(data[i].orderDetails);
      //   console.log(this.orders);
      // }


    });
  }
  onExport() {
    this.excel.exportAsExcelFile(this.givendata, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  goToAdd() {
    this.router.navigate(["../usermaintanceadd"],{relativeTo:this.route});
    }
  goToEdit(id: number){
        this.router.navigate(["../usermaintancedit/"+ id], { relativeTo: this.route });
      }
}
