import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DemoService } from '../../../services/api/demo.service';
import { demo } from '../../../models/demo';
import { invoicesubmenu } from '../../../models/Invoicesubmemnu';
import { anyOrAllPropertiesPass } from '@cds/core/internal';
import{customerdemo} from '../../../models/custmerdemo';
import * as $ from 'jquery';
@Component({
  selector: 'app-ncsoadd',
  templateUrl: './ncsoadd.component.html',
  styleUrls: ['./ncsoadd.component.scss'],
})
export class NcsoaddComponent implements OnInit {
  users:customerdemo[]=[];
status='Pending';
  searchtext:any;
  searchnavistext:any;
  searchpmodtext:any;
  searchcusttext:any;
  searchitemtext:any;
  modalclose:boolean=false;
  modalapproved:boolean=false;
  info: boolean = false;
  dipute:boolean=false;
  invoice:boolean=false;
  customer:boolean=false;
  navis:boolean=false;
  pmod:boolean=false;
  item:boolean=false;
  loading = false;
  givendata;
  diputedata;
  diputedata1;
  report;
  billingdata;
  custdata;
  itemdata;
  clickedID:number;
  selectedFile: File[]=[];
  public entryForm: FormGroup;
  submitted = false;
  allinvoicesunmenu:invoicesubmenu [];
  input: string;

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
  //navis value populated
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
       totalUnit:0 ,
       unitPrice:0
     }]
  // {
  //    itemCode:'003065J',
  //    itemDesc:'FUSE',
  // }
  custiddata: any;
  itemiddata: any;
  navisdata: any;
  navisiddata;
  usernavis={
    in_VOYAGE:'',
  }
  pmoddata: any;
  pmodiddata: any;
predata:any;
userdata={
  positionDesc:'',
  preparedBy:'',
  requestDate:'',
}
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
num1:string[]=[];
num2:string[]=[];

//result:Array<number>=Array<number>(100).fill(0);
result:number[]=[0];
rounded:any='';
grandtotal:number=0;

  constructor(private _fb: FormBuilder,
    private mainService: DemoService,
    private toastr: ToastrService,
    private route:ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,) { }

  ngOnInit(): void {

    this.mainService.getprepared().subscribe((data) => {
     // console.log(data);
      this.predata = data;
    console.log('prepared data',this.predata)
    this.userdata= this.predata;
      });

this.mainService.getallinvoicetype().subscribe((data)=>{
  this.allinvoicesunmenu=data;
  console.log(this.allinvoicesunmenu);
})

      this.entryForm = this._fb.group({
        status: ['Pending'],
        invoiceType: ['', [Validators.required]],
        customerOrderNo: [''],
        serviceRenderedFrom: [''],
        serviceRenderedTo:[''],
        serviceRequestBy:[''],
        specialPrice:[''],
        serviceId:[''],
        departmentDesc:[''],
        customerCode:['',[Validators.required]],
        customerName:[''],
        poNumber:[''],
        vesselCode:[''],
        vesselName:[''],
        inVoyage:[''],
        outVoyage:[''],
        lineCode:[''],
        callNo:[''],
        loa:[''],
        loaUom:[''],
        gt:[''],
        ata:[''],
        atd:[''],
        location:[''],
        remarks:[''],


        orderItems: this._fb.array([this.initLinesForm()]),
        orderAttachments: this._fb.array([this.initLinesForm1()]),
    });

    // this.entryForm = this._fb.group({

    //   status:[null] ,
    //   invoiceType:[null] ,
    //   customerOrderNo:[null],
    //   serviceRenderedFrom:[null],
    //   serviceRenderedTo:[null],
    //   serviceRequestBy:[null],
    //   specialPrice:[null],
    //   serviceId:[null],
    //   departmentDesc:[null],
    //   customerCode:[null],
    //   customerName:[null],
    //   poNumber:[null],
    //   vesselCode:[null],
    //   vesselName:[null],
    //   inVoyage:[null],
    //   outVoyage:[null],
    //   lineCode:[null],
    //   callNo:[null],
    //   loa:[null],
    //   loaUom:[null],
    //   gt:[null],
    //   ata:[null],
    //   atd:[null],
    //   location:[null],
    //   remarks:[null],



  //     orderItems: this._fb.array([this.initLinesForm()]),
  //     orderAttachments: this._fb.array([this.initLinesForm1()]),


  //     });
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
  initLinesForm1(){
    return this._fb.group({
      attachmentFilename:[null],
      attachmentId: [null],

    })
  }

  get controls() {
    return (this.entryForm.get("orderItems") as FormArray).controls;
  }
  onRemoveLines(index: number) {
    (<FormArray>this.entryForm.get("orderItems")).removeAt(index);
    if(!this.result[index]){
      this.result[index]=0;
      console.log("if loop");
      }
    this.grandtotal-=this.result[index];
    //this.grandtotal= Math.round((this.grandtotal + Number.EPSILON) * 100) / 100;
    //this.grandtotalstring=  Number(this.grandtotal).toLocaleString('en-GB');
    this.grandtotalstring = this.grandtotal.toFixed(2)
console.log( this.grandtotalstring);
if(+ this.grandtotalstring%1 !=0){
  this.grandtotalstring = this.numberWithCommas( this.grandtotalstring);
}
else
if(+this.grandtotalstring>=1000){
  this.grandtotalstring= this.numberWithCommas( this.grandtotalstring);
}
    this.num1.splice(index,1);
    this.num2.splice(index,1);
    this.result.splice(index,1);
    this.line.splice(index,1);
    this.lines.splice(index,1);
this.line[index]=Math.round((this.result[index] + Number.EPSILON) * 100) / 100;
this.useritem.splice(index,1);

  }
  onAddLines() {
    (<FormArray>this.entryForm.get("orderItems")).push(this.initLinesForm());
this.useritem.push({
  itemCode:'',
  itemDesc:'',
  totalUnit:0 ,
  unitPrice:0 ,

})
this.num1.push();
this.num2.push();
this.line.push(0);
this.lines.push(".00");
  }
  get controls1(){
    return (this.entryForm.get("orderAttachments") as FormArray).controls;
  }
  onRemoveLines1(index: number) {
    (<FormArray>this.entryForm.get("orderAttachments")).removeAt(index);
  }
  onAddLines1() {
    (<FormArray>this.entryForm.get("orderAttachments")).push(this.initLinesForm1());
  }
  gotocreation(){
    this.info=!this.info;
  }

gbill;
billdata:number[]=[0];
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
      //this.billdata=data.billingItems;
      //console.log(this.billdata);
      for (let i = 0; i < this.diputedata1.billingItems.length; i++){
        this.billdata[i] = this.diputedata1.billingItems[i].totalUnit*this.diputedata1.billingItems[i].unitPrice;
        console.log(this.billdata);

      }

      });
    // this.mainService.getbillingdata().subscribe((data)=>{
    //   console.log(data);
    //   this.billingdata= data;
    // });

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
  datanavis;
  gotonavis(){
    //this.navis=!this.navis;
    // this.mainService.getnavispage(this.pagen).subscribe((data) => {
    //   console.log(data);
    //   this.navisdata = data['content'];
    //   this.totalpagenon= data.totalPages;
    //   this.totalelementsn=data.totalElements;
    //   this.currentpagen=data.currentPage;
    // });
    this.mainService.getnavisall().subscribe((data1)=>{
      // console.log(data1);
       this.datanavis=data1['content'];
       console.log(this.datanavis);
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
  datapmod;
  gotopmod(){
   // this.pmod=!this.pmod;
    // this.mainService.getpmodpage(this.pagep).subscribe((data) => {
    //   console.log(data);
    //   this.pmoddata = data['content'];
    //   this.totalpagenop= data.totalPages;
    //   this.totalelementsp=data.totalElements;
    //   this.currentpagep=data.currentPage;

    // });
    this.mainService.getpmodall().subscribe((data1)=>{
      // console.log(data1);
       this.datapmod=data1['content'];
       console.log(this.datapmod);
     });

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
  displayedcol: string[] = ['DisputeId','Invoicenumber','Invoicedate'];
  selected;
  onrowclickdipute(row,data:any){
this.selected=data;
console.log(this.selected);
this.userObj= this.selected;
console.log(row,data);
this.dipute=false;
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
  alldata;
  gotodiputeid(){
   // this.dipute=!this.dipute;
    // this.mainService.getpagecredit(this.pagei).subscribe((data) => {
    //   console.log(data);
    //   this.diputedata = data['content'];
    //   this.totalpagenoi= data.totalPages;
    //   this.totalelementsi=data.totalElements;
    //   this.currentpagei=data.currentPage;
    //  //this.university = data.author;

    // });
    this.mainService.getdisputeall().subscribe((data1)=>{
     // console.log(data1);
      this.alldata=data1['content'];
      console.log(this.alldata)
    });
  }
  getID(id:number){
    this.clickedID=id;
    console.log("clicked by id"+ id);
    this.mainService.getbydisputeid(id).subscribe((data) => {
      this.diputedata1 = data;
      console.log(this.diputedata1);
      this.userObj= this.diputedata1;
     // this.userObj1= this.diputedata1.creditNote;

      });
  // this.diputedata.disputeId=this.clickedID;
  // console.log(this.diputedata.disputeId);
  this.dipute=false;


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
      console.log(this.userobjcust);
      if(this.userobjcust){
        this.userObj.customerCode=this.userobjcust.customerCode;
        console.log(this.userObj.customerCode);
        this.userObj.customerName=this.userobjcust.customerName;
      }
      });
      this.customer=false;
    }
row:any;
showdata='Loading......'
    gotoitem(i:any){
      console.log("selected row"+i);
      this.row=i;
      this.item=!this.item;
      this.mainService.getallitem(this.userObj.invoiceType).subscribe((data) => {
        console.log(data);
       this.itemdata = data;

       if(this.itemdata ==''){
         alert("No data for this field Please select another Invoice Type.");
         //this.showdata='NO data found for this field';
       }

      });

    }

    getitemid(id:number){
      this.clickedID=id;
    console.log("clicked by id"+ id,this.row);
    this.mainService.getbyitemcode(id).subscribe((data) => {
      //console.log(data);
      this.itemiddata= data;
     this.useritem[this.row]= this.itemiddata;
console.log(this.itemiddata);
      });
      this.item=false;

    }
    onSubmit(){
      this.userObj.status='P';
      console.log(this.entryForm.value);
      this.mainService.createall(this.entryForm.value,this.selectedFile).subscribe(data => {
        console.log(data)

      },
        (error) => {
          console.log(error);
        }

      );
      // this.router.navigate(["../formbuilder"], { relativeTo: this.route })
      // .then(() => {
      //   window.location.reload();
      // });
      // if(this.entryForm.value){
      //  this.toastr.success('Record successfully Saved...');
      //  }

    }
// redy approval
onready(){

  this.userObj.status='D';
  this.mainService.createall(this.entryForm.value,this.selectedFile).subscribe(data=>{
    console.log(data);
  });
this.modalapproved=false;
this.router.navigate(["../formbuilder"], { relativeTo: this.route });
}


// file change
public onFileChanged(event) {
  //Select File
  //this.selectedFile = event.target.files[0];
  for (var i = 0; i < event.target.files.length; i++) {
    // var name = event.target.files[i].name;
    // var type = event.target.files[i].type;
    // var size = event.target.files[i].size;
    // var modifiedDate = event.target.files[i].lastModifiedDate;
    this.selectedFile.push(event.target.files[i]);
  }
}

close(){
this.modalclose=!this.modalclose;
}
close1(){
  this.router.navigate(["../formbuilder"], { relativeTo: this.route });
}
readyapp(){
  this.modalapproved=!this.modalapproved;
}
line:number[]=[0];
lines:string[]=[".00"]
sum2(i:any){
//this.num2[i]=0;
parseFloat(this.num2[i]="0")
this.sum(i);
}
grandtotalstring:any=".00"
num11:number[]=[];
num12:number[]=[];

addComma(txt,i) {
  //txt.value = txt.value?.replace(",", "")?.replace(/(\d+)(\d{3})/, "$1,$2");
  txt.value =  parseFloat(this.num1[i]?.replace(/,/g, ''));
  this.num1[i]= Number(txt.value).toLocaleString('en-GB');

  this.num11[i] = parseFloat(this.num1[i]?.replace(/,/g, ''));
  this.num11[i]=Math.round((txt.value + Number.EPSILON) * 100) / 100;
  //this.num11[i]=Math.round((this.num11[i] + Number.EPSILON) * 100) / 100;

}
 numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
pattern=/^\d*\.?\d{0,2}$/g;
alert(i){
  if (this.num1[i].match(this.pattern)){
alert("please insert only 2 decimal number");
return true;
  }
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
onlyDecimalNumberKey(event) {
  let charCode = (event.which) ? event.which : event.keyCode;
  if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57))
      return false;
  return true;

}

sum(i:any){


  //this.result[i]=this.useritem[i].totalUnit*this.useritem[i].unitPrice;
  //this.result[i]=parseFloat(this.num1[i])*parseFloat(this.num2[i]);
 // this.result[i]=this.num1[i]*this.num2[i];

  if(!this.num2[i]){
    this.num2[i]="0";
    console.log("if loop");
    }
    // else{
    //   if(this.countDecimals(this.num2[i])>2){
    //     alert('PLEASE INSERT ONLY 2 DECIMAL NUMBER IN <b>UNITPRICE</b> & AND GO AHED ' +this.num2[i]);

    //  }
    //}
    if(!this.num1[i]){
      this.num1[i]="0";
      console.log("if loop");
      }
      // if(this.num1[i]!=null){
      //   if (this.countDecimals(this.num1[i])>2){
      //     alert("PLEASE INSERT ONLY 2 DECIMAL NUMBER IN TOTALUNIT & AND GO AHED " +this.num1[i]);

      //   }

      //}

     // this.num1[i] = parseFloat(this.num1[i]).toFixed(2);
      // if(this.num2[i]!=null){
      //   if(this.countDecimals(this.num2[i])>2){
      //     alert("please insert only 2 decimal number");
      //  }
      //  }
      this.result[i]= parseFloat(this.num1[i].toString().replace(/,/g, '')) *parseFloat(this.num2[i].toString().replace(/,/g, '')) ;
      console.log(typeof this.result[i]);
//   this.num11[i] = parseFloat(this.num1[i]?.replace(/,/g, ''));
//   this.num12[i]=parseFloat(this.num2[i]?.replace(/,/g, ''));
//   console.log(this.num11[i]);
//   console.log(this.num12[i]);
//   this.result[i]=this.num11[i]*this.num12[i];
// console.log(this.result[i]);

// this.line[i]=Math.round((this.result[i] + Number.EPSILON) * 100) / 100;
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
// this.grandtotal= Math.round((this.grandtotal + Number.EPSILON) * 100) / 100;// also used Math.floor(1.0789 * 100) / 100
//  this.grandtotalstring=  Number(this.grandtotal).toLocaleString('en-GB');
//  this.lines[i] = Number(this.line[i]).toLocaleString('en-GB');

}
twosetnum1(i){

  if(this.num1[i]. split(', ')){
this.num1[i]=this.num1[i].replace(/,/g, '');
console.log(this.num1[i]);
  }
  if(this.num2[i]. split(', ')){
    this.num2[i]=this.num2[i].replace(/,/g, '');
    console.log(this.num2[i]);
      }
this.num1[i] = parseFloat(this.num1[i]).toFixed(2)
console.log(this.num1[i]);

if(+this.num1[i]%1 !=0){
  this.num1[i] = this.numberWithCommas(this.num1[i]);
}
else
if(+this.num1[i]>=1000){
  this.num1[i]= this.numberWithCommas(this.num1[i]);
}
this.num2[i]= parseFloat(this.num2[i]).toFixed(2);
console.log(this.num2[i]);

if(+this.num2[i]%1 !=0){
 // this.addComma(Text,i);
  this.num2[i]= this.numberWithCommas(this.num2[i]);
  console.log(this.num2[i]);
}
else
if(+this.num2[i]>=1000){
  this.num2[i]= this.numberWithCommas(this.num2[i]);
  console.log(this.num2[i]);
}
//this.sum(i);
  //this.num1[i] = parseFloat(this.num1[i]).toFixed(2);
  //this.num2[i]= parseFloat(this.num2[i]).toFixed(2);
}
twosetnum2(i){

  this.num2[i]= parseFloat(this.num2[i]).toFixed(2);
  console.log(this.num2[i]);

  if(+this.num2[i]%1 !=0){
    this.addComma(Text,i);
  }
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
        }
} );
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
        }
} );
}





// total:any=0
// mul(first:string,second:string){
//   this.total=parseInt(first)*parseInt(second);
// }
// inputValue = (<HTMLInputElement>document.getElementById('ab')).value;
// inputValue2 = (<HTMLInputElement>document.getElementById('ab')).value;

// val = 0;

//   @ViewChild('result',{static:false, read: ElementRef}) divHello: ElementRef;
//   @ViewChildren("result") private result1: QueryList<ElementRef>;
//   name1Changed(event, i) {
//     // console.log(this.divHello.nativeElement.value);

//     this.grandtotal = this.divHello.nativeElement.value;
//     // console.log("Avinash")
//     // this.result1.changes.subscribe(() => console.log("this.result1"));
//     console.log("this.result1")
//     // console.log(this.result1.first.nativeElement.value)
//     // this.result1.changes.subscribe(() => {
//     //   this.result1.toArray().forEach(el => {
//     //       console.log(el.nativeElement.value);
//     //   });
//     // });
//     this.val = 0
//     for(let i of this.controls) {
//       this.val += i.value.totalUnit *i.value.unitPrice;
//     }
//     this.grandtotal = this.val;
//     console.log("this.result1")
//   }







 //Gets called when the user clicks on submit to upload
  // onUpload() {
  //   console.log(this.selectedFile);

  //   //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  //   const uploadeData = new FormData();
  //   uploadeData.append('File', this.selectedFile, this.selectedFile.name);

  //   //Make a call to the Spring Boot Application to save the
  //   this.httpClient.post('http://localhost:9191/ncso_attch/upload', uploadeData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         //this.message = 'Document uploaded successfully';
  //       } else {
  //         //this.message = 'Document not uploaded successfully';
  //       }
  //     }
  //     );


  // }


}


