import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../../services/excel.service';
import * as moment from 'moment';
import {LogconfigService} from '../../../services/api/logconfig.service';
@Component({
  selector: 'app-logconfig',
  templateUrl: './logconfig.component.html',
  styleUrls: ['./logconfig.component.scss']
})
export class LogconfigComponent implements OnInit {
  loading = false;
  public entryForm: FormGroup;
  givendata;
  modalAdd= false;
  modaldelete=false;
  rowSelected :any= {};
  filename:any;
  username;
  level;
  constructor(private excel: ExcelService,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private mainservice:LogconfigService) { }
    retrievedImage: File;
  base64Data: any;
  retrieveResonse: any;
  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.mainservice.getAll().subscribe((data)=>{
      this.givendata=data;
      console.log(this.givendata);

    });
    this.entryForm = this._fb.group({
      user:[null] ,
      loglevel:[null] ,

      });

  }
  onExport() {
    this.excel.exportAsExcelFile(this.givendata, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  goToAdd() {
       this.modalAdd=!this.modalAdd;

      }
      onSubmit() {
        this.mainservice.create(this.username,this.level).subscribe(data=>{
          console.log(data);
          this.ngOnInit();
        },
        (error)=>{
          console.log(error);
        }
        );
        this.modalAdd=false;
      }
      modaldel(row){
        this.rowSelected = row;
        this.modaldelete=true;
      }
      delete(name)
      {
        console.log("in delete  "+name);
        this.mainservice.delete(name).subscribe(
          (data) => {
            console.log(data);
            //this.ngOnInit();
          }, );
          this.modaldelete=false;
      }
      download(filename){
        this.mainservice.downloadfile(filename).subscribe((data)=>{
          this.retrieveResonse = data;
          console.log(this.retrieveResonse);
          // this.base64Data = this.retrieveResonse.picByte;
          // this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        })
      }
}
