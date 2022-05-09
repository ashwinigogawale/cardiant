import { Component, OnInit } from '@angular/core';
import{GitfileService} from 'src/app/services/api/gitfile.service';
import {Suregit} from 'src/app/models/suregit';
import { Surestar } from 'src/app/models/surestar';
import { Surename } from 'src/app/models/surename';
import { SuregitService } from 'src/app/services/api/suregit.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Gitfile } from 'src/app/models/gitfile';
@Component({
  selector: 'app-gitfile1',
  templateUrl: './gitfile1.component.html',
  styleUrls: ['./gitfile1.component.scss']
})
export class Gitfile1Component implements OnInit {
  showme:boolean=false;
  suregit:Gitfile;
  surestar:Surestar;
  sure:Surename;
  name:any="";
  gitid:any="";
    msg: any;
  constructor(private gitfileservice:GitfileService,
    private suregitservice:SuregitService,
    private http:HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id= this.route.snapshot.queryParams.id
    this.suregit = new Gitfile();
    this.gitfileservice.getAll(id).subscribe((data) => {
      this.suregit = data;
      console.log(this.suregit);

    });
//star,fork
this.surestar = new Surestar();
this.suregitservice.getstar().subscribe((data) => {
  this.surestar= data;
  console.log(this.surestar);

});
//name

this.sure= new Surename();
this.suregitservice.getname().subscribe((data) => {
  this.sure= data;
  console.log(data);
 this.name = data[0]["commit"]["committer"];
 this.gitid=data[0]["commit"]["tree"]["sha"];
this.msg=data[0]["commit"]["message"];
});
  }
  toggle(){
    this.showme=!this.showme;
  }
  decode(enc:string){
    if(enc!=null){
    return atob(enc);}
  }
}
