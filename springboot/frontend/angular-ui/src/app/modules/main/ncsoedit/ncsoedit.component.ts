import { Component, OnInit,ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillingdemoService } from 'src/app/services/api/billingdemo.service';
import { CustomerdemoService } from 'src/app/services/api/customerdemo.service';
import { DemoService } from 'src/app/services/api/demo.service';
import { DiputesemoService } from 'src/app/services/api/diputesemo.service';
import { ItemdemoService } from 'src/app/services/api/itemdemo.service';
import { demo } from 'src/app/models/demo';
import {Item} from 'src/app/models/item';
import { HttpClient } from '@angular/common/http';
import { invoicesubmenu } from 'src/app/models/Invoicesubmemnu';
import { isEmpty } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-ncsoedit',
  templateUrl: './ncsoedit.component.html',
  styleUrls: ['./ncsoedit.component.scss']
})
export class NcsoeditComponent implements OnInit {
  searchtext:any;
  info: boolean = false;
  modalclose:boolean=false;
  modalapproved:boolean=false;
  dipute:boolean=false;
  invoice:boolean=false;
  customer:boolean=false;
  navis:boolean=false;
  pmod:boolean=false;
  item:boolean=false;
  loading = false;
  public entryForm: FormGroup;
  project: any;
  givendata:any={};
  userObj={
    status:'Pending',
    invoiceType:'ADV_RENTAL',
    customerOrderNo:'',
      serviceRenderedFrom:'',
      serviceRenderedTo:'',
      serviceRequestBy:'',
      specialPrice:'',
      serviceId:'',
      departmentDesc:'',
      customerCode:'',
      poNumber:'',
      vesselCode:'',
      vesselName:'',
      inVoyage:'',
      outVoyage:'',
      lineCode:'',
      callNo:'',
      loa:'',
      loaUom:'',
      gt:'',
      ata:'',
      atd:'',
      location:'',
      remarks:'',
      customerName:'',
      ataFormated:'',
      atdFormated:'',
      serviceRenderedFromFormated:'',
      serviceRenderedToFormated:''
  }
  //givendata1;
  diputedata;
  billingdata;
  itemdata;
  attachmentdata;
  custdata;
  clickedID:number;
  id: number;
  university;
  selectedFile: File[]=[];
   // related variables
   //selectedFile: File;
   retrievedImage: any;
   base64Data: any;
   retrieveResonse: any;
   message: string;
   imageName: any;
   allinvoicesunmenu:invoicesubmenu [];
   diputedata1;
   navisdata;
   navisiddata;
   pmoddata;
   pmodiddata;
   itemiddata;
   custiddata;
  searchnavistext:any;
  searchpmodtext:any;
  searchcusttext:any;
  searchitemtext:any;
  totalpagenoi:any;
  currentpagei:any;
  totalelementsi:any;
pagei:number=0;
pagen:number=0;
totalpagenon:any;
  currentpagen:any;
  totalelementsn:any;
  pagep:number=0;
totalpagenop:any;
  currentpagep:any;
  totalelementsp:any;
  pagec:number=0;
  totalpagenoc:any;
  currentpagec:any;
  totalelementsc:any;
  userObj1={
    // status:'',
    // invoiceType:'',
    // customerOrderNo:'',
    //   serviceRenderedFrom:'',
    //   serviceRenderedTo:'',
    //   serviceRequestBy:'',
    //   specialPrice:'',
     serviceId:'',
    //   departmentDesc:'',
      customerCode:'',
      poNumber:'',
      vesselCode:'',
      vesselName:'',
      inVoyage:'',
      outVoyage:'',
      lineCode:'',
      callNo:'',
      loa:'',
      loaUom:'',
      gt:'',
      ata:'',
      atd:'',
      location:'',
      remarks:'',
      customerName:'',
      ataFormated:'',
      atdFormated:'',
  }
  userObjpmod={
    vesselCode:'',
    vesselName:'',
    inVoyage:'',
    outVoyage:'',
    lineCode:'',
    callNo:'',
    loa:'',
    loaUom:'',
    gt:'',
    ataFormated:'',
    atdFormated:'',
    ata:'',
    atd:'',
  }
  userobjcust={
    customerName:'',
    customerCode:'',
  }

  useritem=[ {
    itemCode:'',
    itemDesc:'',
    totalUnit:'0' ,
    unitPrice:'0' ,
  }]
  givendata1=[{
    attachmentId:'',
    attachmentFilename:''
  }]
  constructor(private _fb: FormBuilder,
    private mainService: DemoService,
    private route:ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
      this.entryForm = this._fb.group({
      item: this._fb.array([this.initLinesForm()]),
    });
    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);

    this.getData();
    this.mainService.getallinvoicetype().subscribe((data)=>{
      this.allinvoicesunmenu=data;
      console.log(this.allinvoicesunmenu);
    })

  }

  getById(id: number) {
    this.mainService.getById(id).subscribe((data) => {
      this.givendata = data;
      this.userObj=this.givendata;
      console.log("data",this.givendata);
      this.givendata1= (this.givendata.orderAttachments);
      this.itemdata=(this.givendata.orderItems);
     console.log(this.itemdata);
     this.useritem=this.itemdata;
     this.givendata.orderItems.forEach(function (value) {value.unitPriceString = value.unitPrice
    value.totalUnitString= value.totalUnit }
     );

     console.log(this.givendata.orderItems);
     this.gotototal();
      this.attachmentdata=(this.givendata.orderAttachment);
     // console.log(this.attachmentdata);
     // this.userObj= this.givendata;
      });
  }
  getData() {

    this.entryForm = this._fb.group({

      status:[null] ,
      invoiceType:[null] ,
      customerOrderNo:[null],
      serviceRenderedFrom:[null],
      serviceRenderedTo:[null],
      serviceRequestBy:[null],
      specialPrice:[null],
      serviceId:[null],
      departmentDesc:[null],
      customerCode:[null],
      poNumber:[null],
      vesselCode:[null],
      vesselName:[null],
      inVoyage:[null],
      outVoyage:[null],
      lineCode:[null],
      callNo:[null],
      loa:[null],
      loaUom:[null],
      gt:[null],
      ata:[null],
      atd:[null],
      location:[null],
      remarks:[null],



      orderItems: this._fb.array([this.initLinesForm()]),
        orderAttachments: this._fb.array([this.initLinesForm1()]),


      });



  }
  initLinesForm1(){
    return this._fb.group({
      attachmentFilename:[null],
      attachmentId: [null],

    })
  }
  initLinesForm() {
    return this._fb.group({

      lineId:[null],
      itemCode:[null] ,
      itemDesc:[null] ,
      totalUnit:[null] ,
      unitPrice:[null] ,
       linetotal:[null],
       totalUnitString:[null],
       unitPriceString: [null]


    });

  }
    onAddLines1() {
    (<FormArray>this.entryForm.get("orderAttachments")).push(this.initLinesForm1());
    this.givendata1.push({
      attachmentId:'',
      attachmentFilename:''
    })
  }
  onRemoveLines1(index: number){
    (<FormArray>this.entryForm.get("orderAttachments")).removeAt(index);
    this.givendata1.splice(index,1);
  }
  get controls1(){
    return (this.entryForm.get("orderAttachments") as FormArray).controls;
  }
  get controls() {
    return (this.entryForm.get("orderItems") as FormArray).controls;
  }

  onRemoveLines(index: number) {
    (<FormArray>this.entryForm.get("orderItems")).removeAt(index);
    this.useritem.splice(index,1);
    this.line.splice(index,1);
    this.lines.splice(index,1);
this.line[index]=Math.round((this.result[index] + Number.EPSILON) * 100) / 100;
this.grandtotal-=this.line[index];
this.grandtotalstring = this.grandtotal.toFixed(2)
console.log( this.grandtotalstring);
if(+ this.grandtotalstring%1 !=0){
  this.grandtotalstring = this.numberWithCommas( this.grandtotalstring);
}
else
if(+this.grandtotalstring>=1000){
  this.grandtotalstring= this.numberWithCommas( this.grandtotalstring);
}
   // this.grandtotal= Math.round((this.grandtotal + Number.EPSILON) * 100) / 100;
   // this.grandtotalstring=  Number(this.grandtotal).toLocaleString('en-GB');
  }
  onAddLines() {
    (<FormArray>this.entryForm.get("orderItems")).push(this.initLinesForm());
    this.useritem.push({
      itemCode:'',
      itemDesc:'',
      totalUnit:'0' ,
      unitPrice:'0' ,

    })
    this.line.push(0);
    this.lines.push(".00");
  }
  goToWhoColumns() {
    this.info = !this.info;
}
selected;
onrowclickdipute(row,data:any){
  this.selected=data;
  console.log(this.selected);
  this.userObj= this.selected;
  console.log(row,data);
  this.dipute=false;
  if(this.userObj){
    //this.givendata.status=this.userObj.status;
    //console.log(this.givendata.status);
    this.givendata.invoiceType=this.userObj.invoiceType;
    this.givendata.customerOrderNo=this.userObj.customerOrderNo;
    this.givendata.serviceRequestBy=this.userObj.serviceRequestBy;
    this.givendata.serviceRenderedFrom=this.userObj.serviceRenderedFrom;
    console.log(this.givendata.serviceRenderedFrom);
    this.givendata.serviceRenderedTo=this.userObj.serviceRenderedTo;
    this.givendata.vesselCode=this.userObj.vesselCode;
    this.givendata.vesselName=this.userObj.vesselName;
    this.givendata.inVoyage=this.userObj.inVoyage;
    this.givendata.outVoyage=this.userObj.outVoyage;
    this.givendata.serviceId=this.userObj.serviceId;
    this.givendata.lineCode=this.userObj.lineCode;
    this.givendata.callNo=this.userObj.callNo;
    this.givendata.loa=this.userObj.loa;
    this.givendata.loaUom=this.userObj.loaUom;
    this.givendata.gt=this.userObj.gt;
    this.givendata.location=this.userObj.location;
    this.givendata.ataFormated=this.userObj.ataFormated;
    this.givendata.atdFormated=this.userObj.atdFormated;
    this.givendata.poNumber=this.userObj.poNumber;
    this.givendata.customerCode=this.userObj.customerCode;
    this.givendata.customerName=this.userObj.customerName;
    this.givendata.remarks=this.userObj.remarks;
  }
    }
setpageinv(i,event:any){
  if(i>=0){
    event.preventDefault();
  this.pagei=i;

  this.gotodiputeid();
  }
}
openinvoicemodal(){
  this.dipute=!this.dipute;
  this.gotodiputeid();
}
gotodiputeid(){
  this.mainService.getpagecredit(this.pagei).subscribe((data) => {
    console.log(data);
    this.diputedata = data['content'];
    this.totalpagenoi= data.totalPages;
    this.totalelementsi=data.totalElements;
    this.currentpagei=data.currentPage;

  });
}
getID(id:number){
  this.clickedID=id;
  console.log("clicked by id"+ id);
  this.mainService.getbydisputeid(id).subscribe((data) => {
    this.diputedata1 = data;
    console.log(this.diputedata1);
    this.userObj=this.diputedata1;

      });
this.dipute=false;
}
gotobilling(id:number){
  if (id == null) {
    alert('Please select invoice first');
    return false;
}
  this.invoice=!this.invoice;
  this.clickedID=id;
  console.log("clicked by id"+ id);
  this.mainService.getnewdisput(id).subscribe((data) => {
    this.diputedata1 = data;
    console.log(this.diputedata1);

    });


}
gotoinvoice(){
  this.invoice=!this.invoice;
  this.getbillingData();
}
setpagenavis(i,event:any){
  if(i>=0){
    event.preventDefault();
  this.pagen=i;

  this.gotonavis();
  }
}
opennavismodal(){
  this.navis=!this.navis;
  this.gotonavis();
}
gotonavis(){
  //this.navis=!this.navis;
  this.mainService.getnavispage(this.pagen).subscribe((data) => {
    console.log(data);
    this.navisdata = data['content'];
    this.totalpagenon= data.totalPages;
    this.totalelementsn=data.totalElements;
    this.currentpagen=data.currentPage;
  });

}
getnavisid(name:any ,id:number){
  this.clickedID=name,id;
  console.log("cliked by"+name,id);
  this.mainService.getbynavisid(name,id).subscribe((data)=>{
   // console.log(data);
    this.navisiddata =data;
    this.userObj1 = this.navisiddata;
    console.log(this.userObj1);
    if(this.userObj1){
      this.userObj.vesselCode=this.userObj1.vesselCode;
      console.log(this.userObj.vesselCode);
      this.userObj.vesselName=this.userObj1.vesselName;
      this.userObj.inVoyage=this.userObj1.inVoyage;
      this.userObj.outVoyage=this.userObj1.outVoyage;
      this.userObj.serviceId=this.userObj.serviceId;
      this.userObj.lineCode=this.userObj1.lineCode;
      this.userObj.callNo=this.userObj1.callNo;
      this.userObj.loa=this.userObj1.loa;
      this.userObj.loaUom=this.userObj1.loaUom;
      this.userObj.gt=this.userObj1.gt;
      this.userObj.location=this.userObj1.location;
      this.userObj.ataFormated=this.userObj1.ataFormated;
      this.userObj.atdFormated=this.userObj1.atdFormated;
    }

  });
  this.navis=false;
}
openpmodmodal(){
  this.pmod=!this.pmod;
  this.gotopmod();
}
setpagepmod(i,event:any){
  if(i>=0){
    event.preventDefault();
  this.pagep=i;

  this.gotopmod();
  }
}
gotopmod(){
 // this.pmod=!this.pmod;
  this.mainService.getpmodpage(this.pagep).subscribe((data) => {
    console.log(data);
    this.pmoddata = data['content'];
    this.totalpagenop= data.totalPages;
    this.totalelementsp=data.totalElements;
    this.currentpagep=data.currentPage;

  });

}
selectedpmod;
onclickpmod(row,data:any){
  this.selectedpmod=data;
  this.userObjpmod=this.selectedpmod;
  console.log(row,data);
  this.pmod=false;
  if(this.userObjpmod){
    this.userObj.vesselCode=this.userObjpmod.vesselCode;
    console.log(this.userObj.vesselCode);
    this.userObj.vesselName=this.userObjpmod.vesselName;
    this.userObj.inVoyage=this.userObjpmod.inVoyage;
    this.userObj.lineCode=this.userObjpmod.lineCode;
    this.userObj.callNo=this.userObjpmod.callNo;
    this.userObj.loa=this.userObjpmod.loa;
    this.userObj.gt=this.userObjpmod.gt;
    this.userObj.ataFormated=this.userObjpmod.ataFormated;
    this.userObj.atdFormated=this.userObjpmod.atdFormated;
  }
    }
getpmodid(id:number){
  this.clickedID=id;
  console.log("clicked by" + id);
  this.mainService.getbypmodid(id).subscribe((data)=>{
    this.pmodiddata=data;
    this.userObjpmod = this.pmodiddata;
    console.log(this.userObjpmod);
  });
  this.pmod=false;
}
getbyid(id:any){
  this.mainService.getById(id).subscribe(
    (data) => {
      this.project = data;
    },
    (err) => {
      console.log(err);
    }
  );
}

getbillingData() {
  // this.billingservice.getbyid(420).subscribe((data) => {
  //   console.log(data);
  //   this.billingdata = data;
   // this.university = data.author;

  //});

}
allcustdata;
getallcust(){
  this.mainService.getallcustomer().subscribe((data)=>{
    console.log(data);
this.allcustdata=data;
  })
}
opencustmod(){
  this.customer=!this.customer;
  this.getallcust();
}
setpagecust(i,event:any){
  if(i>=0){
    event.preventDefault();
  this.pagec=i;

  this.gotocustomerid();
  }
}
gotocustomerid(){
  //this.customer=!this.customer;
  this.mainService.getallcustpage(this.pagec).subscribe((data) => {
    console.log(data);
    this.custdata = data['content'];
    this.totalpagenoc= data.totalPages;
    this.totalelementsc=data.totalElements;
    this.currentpagec=data.currentPage;
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
    if(this.userobjcust){
      this.userObj.customerCode=this.userobjcust.customerCode;
      console.log(this.userObj.customerCode);
      this.userObj.customerName=this.userobjcust.customerName;
    }
    });
    this.customer=false;
  }
  row:any;
    gotoitem(i:any){
      console.log("selected row"+i);
      this.row=i;
      this.item=!this.item;
      this.mainService.getallitem(this.userObj.invoiceType).subscribe((data) => {
        console.log(data);
       this.itemdata = data;


      });
    }

  getitemid(id:number){
    this.clickedID=id;
  console.log("clicked by id"+ id,this.row);
  this.mainService.getbyitemcode(id).subscribe((data) => {
    //console.log(data);
    this.itemiddata= data;
   // this.givendata.orderItems[id]=this.itemdata;
   this.useritem[this.row]= this.itemiddata;
   this.useritem[this.row].totalUnit='0';
   this.useritem[this.row].unitPrice='0';
console.log(this.useritem[this.row]);
    });
    this.item=false;
  }
  public onFileChanged(event) {

    for (var i = 0; i < event.target.files.length; i++) {

      this.selectedFile.push(event.target.files[i]);
    }
  }
  update(id){
//     console.log(this.givendata);
//     this.mainService.updateall(id,this.givendata).subscribe((data)=>{
// //console.log(data);
//     });
    // if (id) {
    //   this.toastr.success('Updated successfully');
    //         }
    // this.router.navigate(["../../formbuilder"], { relativeTo: this.route });
    this.givendata.orderItems.forEach(function(value){value.unitPriceString=value.unitPrice
      value.totalUnitString=value.totalUnit})
    this.givendata.orderItems.forEach(function (value) {value.unitPrice = null
    value.totalUnit=null});
    console.log(this.givendata.orderItems);
    console.log(this.givendata);
    this.mainService.updatealln(id,this.givendata,this.selectedFile).subscribe((data)=>{
      console.log(data);

    });
    this.router.navigate(["../../formbuilder"], { relativeTo: this.route })
    .then(() => {
      window.location.reload();
    });

    if(this.givendata,this.selectedFile){
      this.toastr.success('Record successfully Updated...');
      }
      else{
        this.toastr.error("record not saved");
      }
  }
  close(){
    this.modalclose=!this.modalclose;
    }
    close1(){
      this.router.navigate(["../../formbuilder"], { relativeTo: this.route });
    }
    readyapp(){
      this.modalapproved=!this.modalapproved;
    }
    aprroved(id){
      this.givendata.status='D';
      this.mainService.updateall(id,this.givendata).subscribe((data)=>{
  console.log(data);
      });
       this.router.navigate(["../../formbuilder"], { relativeTo: this.route });
    }
    resetForm() {
      this.entryForm.reset();

    }
    countDecimals = function (value) {
      //if(Math.floor(value) === value) return 0;
      if(value.includes('.')){
        console.log(value);
        return value.split(".")[1].length || 0;

      }
      else{
        return 0;
      }
    }
    result:number[]=[0];
    line:number[]=[0];
    lines:string[]=["00","00","00"];
    grandtotalstring:any="00"
    grandtotal:number=0;
    sum(i: number) {
      this.result[i] = +this.itemdata[i].totalUnit* +this.itemdata[i].unitPrice;
      console.log(this.result[i]);
      this.line[i]=Math.round((this.result[i] + Number.EPSILON) * 100) / 100;
      this.grandtotal=0;

for(let i=0;i<this.result.length;i++){
   this.grandtotal+=this.result[i];
}
this.grandtotal= Math.round((this.grandtotal + Number.EPSILON) * 100) / 100;
 this.grandtotalstring=  Number(this.grandtotal).toLocaleString('en-GB');
 this.lines[i] = Number(this.line[i]).toLocaleString('en-GB');

  }

  decimal(i:any,event){

    if(this.useritem[i].totalUnit!=null){
      console.log(this.countDecimals(this.useritem[i].totalUnit));
      // if (this.countDecimals(this.useritem[i].totalUnit.toLocaleString())>2){
      //   alert("PLEASE insert only 2 Decimal Number in TOTALUNIT And Go Ahead " +this.useritem[i].totalUnit);

      // }
    }
    if(this.useritem[i].unitPrice!=null){
      // if (this.countDecimals(this.useritem[i].unitPrice)>2){
      //   alert("PLEASE insert only 2 Decimal Number in UNITPRICE And Go Ahead " +this.useritem[i].unitPrice);
      // }
      let charCode = (event.which) ? event.which : event.keyCode;
      if (charCode != 46 && charCode > 31
          && (charCode < 48 || charCode > 57))
          return false;
      return true;
    }

this.gotototal();
}
gotototal(){

  for(let i=0; i<this.useritem?.length;i++){
if(!this.useritem[i].totalUnit){
this.useritem[i].totalUnit='0';
//console.log("if loop");
}

if(!this.useritem[i].unitPrice){
  this.useritem[i].unitPrice='0';
  //console.log("if loop");
  }

    this.result[i]= parseFloat(this.useritem[i].unitPrice.toString().replace(/,/g, '')) *parseFloat(this.useritem[i].totalUnit.toString().replace(/,/g, '')) ;
    //this.result[i]= this.itemdata[i].unitPrice*this.itemdata[i].totalUnit;

    //console.log(this.result[i]);
    //this.line[i]=Math.round((this.result[i] + Number.EPSILON) * 100) / 100;
    // this.grandtotal=0;

    // for(let i=0;i<this.result.length;i++){
    //    this.grandtotal+=this.result[i];
    // // }
    if(+this.useritem[i].totalUnit%1 ==0){

      this.useritem[i].totalUnit = parseFloat(this.useritem[i].totalUnit).toFixed(2)
      console.log("hiiii"+ this.useritem[i].totalUnit)
         }
         if(+this.useritem[i].unitPrice%1 ==0){

          this.useritem[i].unitPrice = parseFloat(this.useritem[i].unitPrice).toFixed(2)
          console.log("hiiii"+ this.useritem[i].unitPrice)
             }
    // if(this.useritem[i].totalUnit.toString().includes!('.')){
    // }
    // else{
    //   console.log("puting decimal value" +this.useritem[i].totalUnit);
    //   this.useritem[i].totalUnit = parseFloat(this.useritem[i].totalUnit).toFixed(2)
    // }
    // if(this.useritem[i].unitPrice.toString().includes('.')){
    // }
    // else{
    //   console.log("puting decimal value" +this.useritem[i].unitPrice);
    //   this.useritem[i].unitPrice = parseFloat(this.useritem[i].unitPrice).toFixed(2)
    // }

    if(+this.useritem[i].totalUnit%1 !=0){
      this.useritem[i].totalUnit = this.numberWithCommas(this.useritem[i].totalUnit);
         }
    else
    if(+this.useritem[i].totalUnit>=1000){
      this.useritem[i].totalUnit= this.numberWithCommas(this.useritem[i].totalUnit);
    }


    if(+this.useritem[i].unitPrice%1 !=0){
     // this.addComma(Text,i);
     this.useritem[i].unitPrice= this.numberWithCommas(this.useritem[i].unitPrice);
      console.log(this.useritem[i].unitPrice);
    }
    else
    if(+this.useritem[i].unitPrice>=1000){
      this.useritem[i].unitPrice= this.numberWithCommas(this.useritem[i].unitPrice);
      console.log(this.useritem[i].unitPrice);
    }
    this.lines[i] = this.result[i].toFixed(2)
console.log(this.lines[i]);
if(+this.lines[i]%1 !=0){
  this.lines[i] = this.numberWithCommas(this.lines[i]);
}
else
if(+this.lines[i]>=1000){
  this.lines[i]= this.numberWithCommas(this.lines[i]);
}
 this.grandtotal=0;
for(let i=0;i<this.result.length;i++){
   this.grandtotal+=this.result[i];
}
this.grandtotalstring = this.grandtotal.toFixed(2)
console.log( this.grandtotalstring);
if(+ this.grandtotalstring%1 !=0){
  this.grandtotalstring = this.numberWithCommas( this.grandtotalstring);
}
else
if(+this.grandtotalstring>=1000){
  this.grandtotalstring= this.numberWithCommas( this.grandtotalstring);
}
//     this.grandtotal= Math.round((this.grandtotal + Number.EPSILON) * 100) / 100;
//      this.grandtotalstring=  Number(this.grandtotal).toLocaleString('en-GB');
//      this.lines[i] = Number(this.line[i]).toLocaleString('en-GB');
//      //console.log(this.lines[i]);
// this.itemdata[i].totalUnitString=this.useritem[i].totalUnit;
// this.itemdata[i].unitPriceString=this.useritem[i].unitPrice;

  }
}
numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
twosetnum1(i){

  if(this.useritem[i].totalUnit.split(', ')){
    this.useritem[i].totalUnit=this.useritem[i].totalUnit.replace(/,/g, '');
console.log(  typeof this.useritem[i].totalUnit);
  }
  if(this.useritem[i].unitPrice.split(', ')){
    this.useritem[i].unitPrice=this.useritem[i].unitPrice.replace(/,/g, '');
    console.log(this.useritem[i].unitPrice);
      }
      this.useritem[i].totalUnit = parseFloat(this.useritem[i].totalUnit).toFixed(2)
console.log(this.useritem[i].totalUnit);

if(+this.useritem[i].totalUnit[i]%1 !=0){
  this.useritem[i].totalUnit = this.numberWithCommas(this.useritem[i].totalUnit);
}
else
if(+this.useritem[i].totalUnit>=1000){
  this.useritem[i].totalUnit= this.numberWithCommas(this.useritem[i].totalUnit);
}
this.useritem[i].unitPrice= parseFloat(this.useritem[i].unitPrice).toFixed(2);
console.log(this.useritem[i].unitPrice);

if(+this.useritem[i].unitPrice%1 !=0){
 // this.addComma(Text,i);
 this.useritem[i].unitPrice= this.numberWithCommas(this.useritem[i].unitPrice);
  console.log(this.useritem[i].unitPrice);
}
else
if(+this.useritem[i].unitPrice>=1000){
  this.useritem[i].unitPrice= this.numberWithCommas(this.useritem[i].unitPrice);
  console.log(this.useritem[i].unitPrice);
}
this.gotototal();
//this.sum(i);
  //this.num1[i] = parseFloat(this.num1[i]).toFixed(2);
  //this.num2[i]= parseFloat(this.num2[i]).toFixed(2);
}
searchcust(){
  this.mainService.getsearchcustvalue(this.searchcusttext).subscribe((data) => {
    console.log(data);
    this.custdata = data['content'];
    this.totalpagenoc= data.totalPages;
    this.totalelementsc=data.totalElements;
    this.currentpagec=data.currentPage;

   if(this.totalelementsc == 0){
     console.log("no element");
     alert('No Relevant Data Found ');
     return false;
        }
} );
}
searchnavis(){
  this.mainService.getsearchnavisvalue(this.searchnavistext).subscribe((data) => {
       console.log(data);
       this.navisdata = data['content'];
    this.totalpagenon= data.totalPages;
    this.totalelementsn=data.totalElements;
    this.currentpagen=data.currentPage;

      if(this.totalelementsn == 0){
        console.log("no element");
        alert('No Relevant Data Found ');
        return false;
           }
  } );
}
searchpmod(){
  this.mainService.getsearchpmodvalue(this.searchpmodtext).subscribe((data) => {
    console.log(data);
    this.pmoddata = data['content'];
      this.totalpagenop= data.totalPages;
      this.totalelementsp=data.totalElements;
      this.currentpagep=data.currentPage;
     if(this.totalelementsp == 0){
     console.log("no element");
     alert('No Relevant Data Found ');
     return false;
        }
} );
}
searchdispute(){
  this.mainService.getsearchdisputevalue(this.searchtext).subscribe((data) => {
    console.log(data);
    this.diputedata = data['content'];
    this.totalpagenoi= data.totalPages;
    this.totalelementsi=data.totalElements;
    this.currentpagei=data.currentPage;
     if(this.totalelementsi == 0){
     console.log("no element");
     alert('No Relevant Data Found ');
     return false;
        }
} );
}
change(event :any) {
  this.givendata.serviceRenderedFromFormated = event;
  console.log(this.givendata.serviceRenderedFromFormated);
}
}

