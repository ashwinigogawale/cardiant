import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SchedulerService } from 'src/app/services/api/scheduler.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  alldata;
  loading = false;
  modalAdd= false;
  public entryForm: FormGroup;
  constructor( private mainservice:SchedulerService,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.mainservice.getAll().subscribe((data) => {
      console.log(data);
      this.alldata = data;
    });

    this.entryForm = this._fb.group({
      accountId:[null] ,
      parameters:[null] ,
      job:[null] ,
      });
  }
  goToAdd() {
    this.modalAdd=true;
    }
    onSubmit(){
      this.modalAdd=false;
      this.mainservice.createpipe(this.entryForm.value).subscribe(data => {
        console.log(data)
        this.ngOnInit();
      },
        (error) => {
          console.log(error);
        }
      );
    }
}
