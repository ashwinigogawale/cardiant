import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/services/api/demo.service';

@Component({
  selector: 'app-ncspapprovalread',
  templateUrl: './ncspapprovalread.component.html',
  styleUrls: ['./ncspapprovalread.component.scss']
})
export class NcspapprovalreadComponent implements OnInit {
  id: number;
  public entryForm: FormGroup;
  givendata:any={};
set;
  constructor(private route:ActivatedRoute,
        private router: Router,
        private mainService: DemoService,) { }

  ngOnInit(): void {
    // this.entryForm = this._fb.group({
    //   item: this._fb.array([this.initLinesForm()]),
    // });
    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);
  }
  getById(id: number) {
    this.mainService.getById(id).subscribe((data) => {
      this.givendata = data;
      console.log("data",this.givendata);

      });
  }
gotoedit(id:number){
  this.router.navigate(["../../ncsoappedit/"+ id],{relativeTo:this.route});
}
}
