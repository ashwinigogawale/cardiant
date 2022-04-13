import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillingdemoService } from '../../../services/api/billingdemo.service';
import { CustomerdemoService } from '../../../services/api/customerdemo.service';
import { DemoService } from '../../../services/api/demo.service';
import { DiputesemoService } from '../../../services/api/diputesemo.service';
import { ItemdemoService } from '../../../services/api/itemdemo.service';
import { demo } from '../../../models/demo';
import { invoicesubmenu } from '../../../models/Invoicesubmemnu';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  info: boolean = false;
  dipute:boolean=false;
  modalclose:boolean=false;
  invoice:boolean=false;
  customer:boolean=false;
  navis:boolean=false;
  pmod:boolean=false;
  item:boolean=false;
  loading = false;
  public entryForm: FormGroup;
  project: any;
  givendata:any={};
  givendata1;
  diputedata;
  billingdata;
  itemdata;
  attachmentdata;
  custdata;
  clickedID:number;
  id: number;
  university;

   // related variables
   selectedFile: File;
   retrievedImage: any;
   base64Data: any;
   retrieveResonse: any;
   message: string;
   imageName: any;
   allinvoicesunmenu:invoicesubmenu [];


  constructor(private _fb: FormBuilder,
    private mainService: DemoService,
    private diputeservice:DiputesemoService,
    private billingservice:BillingdemoService,
    private custservice:CustomerdemoService,
    private itemservice:ItemdemoService,
    private route:ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    ) { }

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
  diid;
  getById(id: number) {
    this.mainService.getById(id).subscribe((data) => {
      this.givendata = data;
      console.log("data",this.givendata);
      this.diid = data["billing"] ;
 console.log(this.diid)

      this.givendata1= (this.givendata.orderDetails);
      this.itemdata=(this.givendata.orderItems);
      console.log(this.itemdata);
       this.gotototal();

      this.attachmentdata=(this.givendata.orderAttachment);

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



        item: this._fb.array([this.initLinesForm()]),



      });



  }
  initLinesForm() {
    return this._fb.group({

      lineId:[null] ,
      itemCode:[null] ,
      itemDesc:[null] ,
      totalUnit:[null] ,
      unitPrice:[null] ,
      uom:[null],
      remarks:[null],

    });

  }

  get controls() {
    return (this.entryForm.get("item") as FormArray).controls;
  }
  onRemoveLines(index: number) {
    (<FormArray>this.entryForm.get("item")).removeAt(index);
  }
  onAddLines() {
    (<FormArray>this.entryForm.get("item")).push(this.initLinesForm());
  }
  goToWhoColumns() {
    this.info = !this.info;
}
gotodiputeid(){
  this.dipute=!this.dipute;
  // this.diputeservice.getAll().subscribe((data) => {
  //   console.log(data);
  //   this.diputedata = data;
   // this.university = data.author;

  //});
}
gotoinvoice(){
  this.invoice=!this.invoice;
  this.getbillingData();
}
gotonavis(){
  this.navis=!this.navis;
}
gotopmod(){
  this.pmod=!this.pmod;
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
getID(id:number){
  this.clickedID=id;
this.givendata.re_id=this.clickedID;
this.dipute=false;
}
getbillingData() {
  // this.billingservice.getbyid(420).subscribe((data) => {
  //   console.log(data);
  //   this.billingdata = data;
   // this.university = data.author;

  //});

}
gotocustomerid(){
  this.customer=!this.customer;
  // this.custservice.getAll().subscribe((data) => {
  //   console.log(data);
  //   this.custdata = data;
  //  // this.university = data.author;

  // });
  }
  gotoitem(){
    this.item=!this.item;
    // this.itemservice.getAll().subscribe((data) => {
    //   console.log(data);
    //   this.itemdata = data;
    //  // this.university = data.author;

    // });
  }
  update(id){
    console.log(this.givendata);
    this.mainService.updateall(id,this.givendata).subscribe((data)=>{
//console.log(data);
    });
    if (id) {
      this.toastr.success('Updated successfully');
            }
    this.router.navigate(["../../formbuilder"], { relativeTo: this.route });
  }
  gotoedit(id:number){
    this.router.navigate(["../../ncsoedit/"+ id],{relativeTo:this.route});
  }
  close(){
    this.modalclose=!this.modalclose;
    }
    close1(){
      this.router.navigate(["../../formbuilder"], { relativeTo: this.route });
    }
    result:number[]=[0];
    line:number[]=[0];
    lines:string[]=["00","00","00"];
    grandtotalstring:any="00"
    grandtotal:number=0;
    gotototal(){
      for(let i=0; i<this.itemdata?.length;i++){
        this.result[i]= this.itemdata[i].unitPrice*this.itemdata[i].totalUnit;
        console.log(this.result[i]);

        this.itemdata[i].totalUnit = parseFloat(this.itemdata[i].totalUnit).toFixed(2)
        console.log(this.itemdata[i].totalUnit);
        this.itemdata[i].unitPrice = parseFloat(this.itemdata[i].unitPrice).toFixed(2)
        console.log(this.itemdata[i].unitPrice);

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
        // this.line[i]=Math.round((this.result[i] + Number.EPSILON) * 100) / 100;
        // this.grandtotal=0;

        // for(let j=0;j<this.result.length;j++){
        //    this.grandtotal+=this.result[j];
        // }
        // this.grandtotal= Math.round((this.grandtotal + Number.EPSILON) * 100) / 100;
        //  this.grandtotalstring=  Number(this.grandtotal).toLocaleString('en-GB');
        //  this.lines[i] = Number(this.line[i]).toLocaleString('en-GB');
        //  console.log(this.lines[i]);

      }


    }
    numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }




//   public onFileChanged(event) {
//     //Select File
//     this.selectedFile = event.target.files[0];
//   }

//   //Gets called when the user clicks on submit to upload the image
//   onUpload() {
//     console.log(this.selectedFile);

//     //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
//     const uploadImageData = new FormData();
//     uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

//     //Make a call to the Spring Boot Application to save the image
//     this.httpClient.post('http://localhost:9191/ncso_attch/upload', uploadImageData, { observe: 'response' })
//       .subscribe((response) => {
//         if (response.status === 200) {
//           this.message = 'Document uploaded successfully';
//         } else {
//           this.message = 'Document not uploaded successfully';
//         }
//       }
//       );


//   }

}


