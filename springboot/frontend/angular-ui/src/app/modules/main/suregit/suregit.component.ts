import { Component, OnInit } from '@angular/core';
import {SuregitService} from 'src/app/services/api/suregit.service';
import {Suregit} from 'src/app/models/suregit';
import { Surestar } from 'src/app/models/surestar';
import { Surename } from 'src/app/models/surename';
import { ActivatedRoute, Router } from '@angular/router';
import { anyOrAllPropertiesPass } from '@cds/core/internal';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-suregit',
  templateUrl: './suregit.component.html',
  styleUrls: ['./suregit.component.scss']
})
export class SuregitComponent implements OnInit {
  showme:boolean=false;
  suregit:Suregit[];
  surestar:Surestar;
  sure:Surename;
  name:any="";
  gitid:any="";
  temprouterlink="";
    msg: any;
  constructor(private suregitservice:SuregitService,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.suregitservice.getAll().subscribe((data) => {
      this.suregit = data.tree;
      console.log(data.tree);

    });
//star,fork
this.surestar = new Surestar();
this.suregitservice.getstar().subscribe((data) => {
  this.surestar= data;
  console.log(this.surestar);

});
//sha
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


  getbyid(id){
    this.router.navigate(["../gitfolder"], { relativeTo: this.route });

  }
  onclick(user:Suregit){
    // console.log(user);
    // this.temprouterlink = "/main/gitfolder/"+user.sha;
    // console.log(this.temprouterlink);
    this.router.navigate(["/main/gitfolder"], { relativeTo: this.route ,queryParams:{id:user.sha}});
  }
  onclick1(user:Suregit){
    // console.log(user);
    // this.temprouterlink = "/main/gitfolder/"+user.sha;
    // console.log(this.temprouterlink);
    this.router.navigate(["/main/gitfile"], { relativeTo: this.route ,queryParams:{id:user.sha}});
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);

  }


}
