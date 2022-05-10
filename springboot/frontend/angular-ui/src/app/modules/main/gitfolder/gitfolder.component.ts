import { Component, OnInit } from '@angular/core';
import {SuregitService} from 'src/app/services/api/suregit.service';
import {Suregit} from 'src/app/models/suregit';
import { Surestar } from 'src/app/models/surestar';
import { Surename } from 'src/app/models/surename';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-gitfolder',
  templateUrl: './gitfolder.component.html',
  styleUrls: ['./gitfolder.component.scss']
})
export class GitfolderComponent implements OnInit {
  showme:boolean=false;
  suregit:Suregit[];
  surestar:Surestar;
  sure:Surename;
  name:any="";
  gitid:any="";
    msg: any;
  id: any;
  tempid:any;
  constructor(private suregitservice:SuregitService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    let id= this.route.snapshot.queryParams.id
        this.suregitservice.getAllfolder(id).subscribe((data) => {
      this.suregit = data.tree;
      console.log(data.tree);

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
  onclick(user:Suregit){
    // console.log(user);
    // this.temprouterlink = "/main/gitfolder/"+user.sha;
    // console.log(this.temprouterlink);
    this.router.navigate(["../gitfolder1"], { relativeTo: this.route ,queryParams:{id:user.sha}});
  }
  onclick1(user:Suregit){
    // console.log(user);
    // this.temprouterlink = "/main/gitfolder/"+user.sha;
    // console.log(this.temprouterlink);
    this.router.navigate(["../gitfile1"], { relativeTo: this.route ,queryParams:{id:user.sha}});
  }
}
