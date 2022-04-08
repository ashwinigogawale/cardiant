import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/api/demo.service';

@Component({
  selector: 'app-opencreditnoteadd',
  templateUrl: './opencreditnoteadd.component.html',
  styleUrls: ['./opencreditnoteadd.component.scss']
})
export class OpencreditnoteaddComponent implements OnInit {
  loading = false;
  customer:boolean=false;
  custdata;
  item:boolean=false;
  itemdata;
  custiddata: any;
  userobjcust={
    customerName:'',
    customerCode:'',
  }
  clickedID:number;
  constructor(private mainService: DemoService,) { }

  ngOnInit(): void {
  }
  gotocustomerid(){
    this.customer=!this.customer;
    this.mainService.getallcustomer().subscribe((data) => {
      console.log(data);
      this.custdata = data;
         });
    }
    getcustID(id:number){
      this.clickedID=id;
    console.log("clicked by id"+ id);
    this.mainService.getbycustid(id).subscribe((data) => {
      console.log(data);
      this.custiddata= data;
     // this.userObj= this.custiddata;
      this.userobjcust =this.custiddata;


      });
      this.customer=false;

    }
    gotoitem(){
      this.item=!this.item;
      // this.mainService.getallitem().subscribe((data) => {
      //   console.log(data);
      //   this.itemdata = data;


      // });
    }
}
