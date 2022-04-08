import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/services/api/demo.service';

@Component({
  selector: 'app-ncspapprovaledit',
  templateUrl: './ncspapprovaledit.component.html',
  styleUrls: ['./ncspapprovaledit.component.scss']
})
export class NcspapprovaleditComponent implements OnInit {
  id: number;
  public entryForm: FormGroup;
  givendata:any={};
  modaldelete=false;
  constructor(private route:ActivatedRoute,
    private router: Router,
    private mainService: DemoService,) { }

  ngOnInit(): void {
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
  update(id){
    //console.log(this.givendata);
    this.givendata.status='A';
    this.mainService.updateall(id,this.givendata).subscribe((data)=>{
console.log(data);
    });
     this.router.navigate(["../../form"], { relativeTo: this.route });
  }
  reject(id){
    //console.log(this.givendata);
    this.givendata.status='R';
    this.mainService.updateall(id,this.givendata).subscribe((data)=>{
console.log(data);
    });
    this.router.navigate(["../../form"], { relativeTo: this.route });
  }
  alert() {
     this.modaldelete=true;
  }
}
