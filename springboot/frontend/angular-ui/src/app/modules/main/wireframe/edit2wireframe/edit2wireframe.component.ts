import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { field, value } from 'src/app/global.model';
import { AlertService } from 'src/app/services/alert.service';
//import { FormbuilderService } from 'src/app/services/api/formbuilder.service';
//import { FormdragAttributeService } from 'src/app/services/api/formdrag-attribute.service';
//import { FormdragValueService } from 'src/app/services/api/formdrag-value.service';
//import { FormfragModalService } from 'src/app/services/api/formfrag-modal.service';
import { WireframeLineService } from 'src/app/services/api/wireframe-line.service';
import { Rn_Fb_Lines } from 'src/app/models/Rn_Fb_Lines';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Rn_Fb_Header } from 'src/app/models/Rn_Fb_Header';
import { WireframeService } from 'src/app/services/api/wireframe.service';
import { WireFrame } from 'src/app/models/WireFrame';
declare var $: any;
@Component({
  selector: 'app-edit2wireframe',
  templateUrl: './edit2wireframe.component.html',
  styleUrls: ['./edit2wireframe.component.scss']
})
export class Edit2wireframeComponent implements OnInit {
  value:value={
    label:"",
    value:""
  };
  oneLine: any;
  success = false;
  id: any;
  i1 : any;
  div_name_map = new Map();
  new_model: any = [];
  div_coll = new Map();
  tr_map = new Map();
  sub_div : any = [];
  handleChange(i, val,modalAttributes) {
    if(val == '1a-'+i)
      modalAttributes.size = 'w-100';
    else if(val == '1b-'+i)
      modalAttributes.size = 'w-50';
    else if(val == '1c-'+i)
      modalAttributes.size = 'w-33';
    else if(val == '1d-'+i)
      modalAttributes.size = 'w-25';
  }
  fieldModels:Array<field>=[
    {
      "type": "text",
      "icon": "fa-font",
      "label": "Text",
      "description": "Enter your name",
      "placeholder": "Enter your name",
      "className": "form-control",
      "subtype": "text",
      "size" : 'w-100',
      "regex" : "",
      "div_name" : "",
      "gridLine_name" : "",
      "handle":true
    },
    {
      "type": "email",
      "icon": "fa-envelope",
      "required": true,
      "label": "Email",
      "description": "Enter your email",
      "placeholder": "Enter your email",
      "className": "form-control",
      "subtype": "text",
      "size" : 'w-100',
      "regex" : "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
      "errorText": "Please enter a valid email",
      "div_name" : "",
      "gridLine_name" : "",
      "handle":true
    },
    {
      "type": "phone",
      "icon": "fa-phone",
      "label": "Phone",
      "description": "Enter your phone",
      "placeholder": "Enter your phone",
      "className": "form-control",
      "subtype": "text",
      "size" : 'w-100',
      "regex" : "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      "errorText": "Please enter a valid phone number",
      "div_name" : "",
      "gridLine_name" : "",
      "handle":true
    },
    {
      "type": "number",
      "label": "Number",
      "icon": "fa-html5",
      "description": "Age",
      "placeholder": "Enter your age",
      "className": "form-control",
      "value": "20",
      "size" : 'w-100',
      "min": 12,
      "div_name" : "",
      "gridLine_name" : "",
      "max": 90
    },
    {
      "type": "date",
      "icon":"fa-calendar",
      "label": "Date",
      "size" : 'w-100',
      "placeholder": "Date",
      "div_name" : "",
      "gridLine_name" : "",
      "className": "form-control"
    },
    {
      "type": "datetime-local",
      "icon":"fa-calendar",
      "label": "DateTime",
      "size" : 'w-100',
      "placeholder": "Date Time",
      "div_name" : "",
      "gridLine_name" : "",
      "className": "form-control"
    },
    {
      "type": "textarea",
      "icon":"fa-text-width",
      "size" : 'w-100',
      "div_name" : "",
      "gridLine_name" : "",
      "label": "Textarea"
    },
    {
      "type": "paragraph",
      "icon": "fal fa-align-left",
      "label": "Paragraph",
      "size" : 'w-100',
      "div_name" : "",
      "gridLine_name" : "",
      "placeholder": "Type your text to display here only"
    },
    {
      "type": "Section",
      "icon": "fal fa-align-left",
      "label": "Section",
      "size" : 'w-100',
      "div_name" : "",
      "gridLine_name" : "",
      "placeholder": "Section Name"
    },
    {
      "type": "Division",
      "icon": "fas fa-align-center",
      "label": "Division",
      "size" : 'w-100',
      "div_name" : "",
      "gridLine_name" : "",
      "placeholder": "Division Name",
       children : []
    },
    {
      "type": "Grid Lines",
      "icon": "fas fa-align-center",
      "label": "Grid Lines",
      "size" : 'w-100',
      "div_name" : "",
      "gridLine_name" : "",
      "placeholder": "Grid Lines Name",
      children : []
    },
    {
      "type": "checkbox",
      "required": true,
      "label": "Checkbox",
      "icon":"fa-list",
      "size" : 'w-100',
      "description": "Checkbox",
      "inline": true,
      "div_name" : "",
      "gridLine_name" : "",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "radio",
      "icon":"fa-list-ul",
      "label": "Radio",
      "size" : 'w-100',
      "description": "Radio boxes",
      "div_name" : "",
      "gridLine_name" : "",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "autocomplete",
      "icon":"fa-bars",
      "label": "Select",
      "description": "Select",
      "placeholder": "Select",
      "size" : 'w-100',
      "className": "form-control",
      "div_name" : "",
      "gridLine_name" : "",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "type": "file",
      "icon":"fa-file",
      "label": "File Upload",
      "className": "form-control",
      "size" : 'w-100',
      "subtype": "file",
      "div_name" : "",
      "gridLine_name" : "",
    },
    {
      "type": "button",
      "icon":"fa-paper-plane",
      "subtype": "submit",
      "size" : 'w-100',
      "label": "Button",
      "div_name" : "",
      "gridLine_name" : "",
    },
    {
      "type": "autocomplete",
      "icon":"fa-bars",
      "label": "autocomplete",
      "description": "autocomplete",
      "placeholder": "autocomplete",
      "className": "form-control",
      "div_name" : "",
      "gridLine_name" : "",
      "values": [
        {
          "label": "autocomplete 1",
          "value": "autocomplete-1"
        },
        {
          "label": "autocomplete 2",
          "value": "autocomplete-2"
        },
        {
          "label": "autocomplete 3",
          "value": "autocomplete-3"
        }
      ]
    },
  ];
  modelFields:Array<field>=[];
  model:any = {
    name:'Form name...',
    description:'Form Description...',
    theme:{

      bannerImage:""
    },
    attributes:this.modelFields
  };
  modal=false;
  modal2=false;
  modal3=false;
  report = false;
  reports:any = [];
show:any ;

wfline = {
  header_id: '100',
  model: ''
}
formBuilder: any;
fbLine: Rn_Fb_Lines;
public exportDataForm: FormGroup;
public addButtonOrSectionForm: FormGroup;
fbHeader: Rn_Fb_Header;
formType: string;
uiData: WireFrame = {} as WireFrame;
model1: any = {
  name: 'Form name...',
  description: 'Form Description...',
  attributes: this.modelFields,
  theme: {

    bannerImage: ""
  },

};
  constructor(private ngZone: NgZone,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private toastr: ToastrService,
    private _line: WireframeLineService,
    private _fb: FormBuilder,
    private wireFrameService: WireframeService,
    private router: Router,) { }

  ngOnInit(): void {
    this.fbLine = new Rn_Fb_Lines();
    //this.id = this.route.snapshot.params["id"]; // fb_header_id
    this.id = this.route.snapshot.params.hid;
console.log("update with id = ", this.id);
   // this.getById(this.id);
   // this.getUIData(this.id);


    // this._line.getAllLines().subscribe(
    //   (data: any)=>{
    //     for(let val of data){
    //       //console.log(val.header_id);
    //       if(val.header_id == this.id){
    //         console.log("header id",this.id);
    //         this.wflineget = val;
    //         console.log(this.wflineget);
    //         this.model = JSON.parse(val.model);
    //         console.log(this.model);
    //       }

    //     }
    //     console.log(this.oneLine);

    //   },
    //   (error: any)=>{

    //   }
    // );
    this.copy_value();
  }
  getById(id: number) {
    this.wireFrameService.getById(id).subscribe(
      (data) => {
        console.log("data by id",data);
        this.fbHeader = data;
        this.formType = data.formType;

      },
      (err) => {
        console.log(err);
      }
    );
  }
  getUIData(id: number) {
    console.log("get line by header id",id);
    this.wireFrameService.getLinesByHeaderId(id).subscribe(res => {
      this.uiData = res;
      console.log("data by header id ",this.uiData);
    }, (err) => {
      console.log(err);
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {


      this.ngZone.runOutsideAngular(() => {
        //$(document.getElementById('fb-editor')).formBuilder();
        var fbEditor = document.getElementById('fb-editor');
        this.formBuilder = $(fbEditor).formBuilder();
      });

    }, 2000)


  }
  wflineget = {
    id: '',
    header_id: '',
    model: ''
  }
  optimize() {
    for(let i = 0; i<this.model.attributes.length; i++) {
      if(this.model.attributes[i].size == 'w-100') {
        if(!(this.model.attributes[i].type == "textarea" || this.model.attributes[i].type == "paragraph"|| this.model.attributes[i].type == "radio" ||this.model.attributes[i].type == "file" || this.model.attributes[i].type == "button"))
          this.model.attributes[i].size = 'w-25'
      }

    }
    console.log(this.model.attributes)
    this.updateModal();
  }
  updateModal(){

    this.wflineget.model = JSON.stringify(this.model);
    this._line.updateOneLine(this.wflineget).subscribe(
      (data: any)=>{
        console.log('Updation Successful...');
        console.log(data);
        this.ngOnInit();
        this.modal = false;
        // this.router.navigate(["../../../../wireframe"], { relativeTo: this._route });
      }
    );
  }
  copy_value() {
    let header_gridline_name : any = [];
    let  header_gridline_name_data : any= [];
    let j1 = 0
    this.div_coll.clear();
    this.new_model = [];
    for(let i = 0; i< this.model.attributes.length; i++) {
      this.new_model[j1++] = this.model.attributes[i];
      if(this.model.attributes[i].type == 'Division') {
        i++;
        let j=i;
        let k = 0;
        this.sub_div = [];
        for(; j< this.model.attributes.length; j++) {
          if(this.model.attributes[i].type == 'Grid Lines') {
            this.div_coll.set(j1 - 1, this.sub_div);
            i--;
            break;
          }
          if(this.model.attributes[j].type == 'Division') {
            this.div_coll.set(j1 - 1, this.sub_div);
            i--;
            break;
          }
          this.sub_div[k++] = this.model.attributes[j];
          i++;
        }
        if(j == this.model.attributes.length) {
          this.div_coll.set(j1 - 1, this.sub_div);
          break;
        }
      }
      if(this.model.attributes[i].type == 'Grid Lines') {
        i++;
        let ind = 0;
        let j = i;
        header_gridline_name = [];
        for(; j< this.model.attributes.length; j++) {
          if(this.model.attributes[j].type == 'Grid Lines') {
            this.div_coll.set(j1 - 1, header_gridline_name);
            this.tr_map.set(j1 - 1, header_gridline_name_data);
            i--;
            break;
          }
          header_gridline_name[ind] = this.model.attributes[j].label;
          header_gridline_name_data[ind] = "";
          ind++;
          i++;

        }
        if(j == this.model.attributes.length) {
          this.div_coll.set(j1 - 1, header_gridline_name);
          this.tr_map.set(j1 - 1, header_gridline_name_data);
          break;
        }
      }
    }
  }
  addModal(){
    console.log('Add button clicked...');
    console.log(this.model1);
    this.wfline.header_id = this.id;
    this.wfline.model = JSON.stringify(this.model);

    this._line.addToDB(this.wfline).subscribe(
      (data: any)=>{
        console.log('Data pushed successfully...');
        console.log(data);
        this.modal = false;
        this.ngOnInit();
        this.router.navigate(["../../../../../wireframe"], { relativeTo: this.route })
      },
      (error: any)=>{
        console.log('Error in adding data...');

      }
    );


  }

  onDrop2($event, item) {

  }
  name1Changed(value, i) {
    this.div_name_map.set(i, value);
    this.model.attributes[i].div_name =value;
    console.log(this.model.attributes)
  }
  onDragStart(event:DragEvent) {
    // console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event:DragEvent) {
    // console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event:DragEvent) {
    // console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event:DragEvent) {
    // console.log("draggable linked", JSON.stringify(event, null, 2));
  }


  onDragCanceled(event:DragEvent) {
    // console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event:DragEvent) {
    // console.log("dragover", JSON.stringify(event, null, 2));
  }
 flag = true;
  onDrop( event:DndDropEvent, list?:any[] ) {
    if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) {
      if(event.dropEffect === "copy")
      event.data.name = event.data.type+'-'+new Date().getTime();
      let index = event.index;
      if( typeof index === "undefined" ) {
        index = list.length;
      }

      list.splice( index, 0, event.data );
      console.log(list)
      // this.model.attributes[index].children =  [];
      // console.log(this.model.attributes[index].children.length);
    //   this.flag = true;
    //   for(let ind = index; ind>= 0; ind--) {
    //     if(this.model.attributes[ind].type == 'Division') {
    //       this.model.attributes[index].div_name = this.model.attributes[ind].label;
    //       this.flag = false;
    //       break;
    //     }
    //   }
    //   if(this.flag)
    //   this.model.attributes[index].div_name = "";
    }
    // this.copy_value();
  }



  onDragged( item:any, list:any[], effect:DropEffect ) {
    if( effect === "move" ) {
      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }
  addValue(values){
    values.push(this.value);
    this.value={label:"",value:""};
  }
  found_flag = true;
  async removeField(list?:any[], val?: any){
    this.found_flag = true;
    console.log(list);
    console.log(val)
    // swal({
    //   title: 'Are you sure?',
    //   text: "Do you want to remove this field?",
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#00B96F',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, remove!'
    // }).then((result) => {
    //   if (result.value) {
    //     this.model.attributes.splice(i,1);
    //   }
    // });
    const confirmed: any = await this.alertService.confirm('', 'Delete confirm?');
    if (confirmed.value) {
    for(let i = 0; i< this.model.attributes.length && this.found_flag; i++) {
      if(this.model.attributes[i].name == val) {
        this.model.attributes.splice(i,1);
        this.found_flag = false;
        break;
      }
      else if(this.model.attributes[i].type == 'Division' || this.model.attributes[i].type == 'Grid Lines') {
        this.model.attributes[i].children =  this.helper(this.model.attributes[i].children, val);
      }
    }
    this.toastr.success('Deleted successfully');
    this.copy_value();
    }
  }
  public helper(arrC:any[], val : any) : any[] {
    for(let k = 0; k< arrC.length && this.found_flag; k++) {
      if(arrC[k].name == val) {
        arrC.splice(k,1);
        this.found_flag = false;
        return arrC;
      }
      else if(arrC[k].type == 'Division' || arrC[k].type == 'Grid Lines') {
        arrC[k].children = this.helper(arrC[k].children, val);
      }
    }
    return arrC;
  }

  updateForm(){
    let input = new FormData;
    input.append('id',this.model._id);
    input.append('name',this.model.name);
    input.append('description',this.model.description);
    input.append('bannerImage',this.model.theme.bannerImage);
    input.append('bgColor',this.model.theme.bgColor);
    input.append('textColor',this.model.theme.textColor);
    input.append('attributes',JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }


  initReport(){
    this.report = true;
    let input = {
      id:this.model._id
    }
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }



  toggleValue(item){
    item.selected = !item.selected;
  }

  submit(){
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach(field => {
      console.log(field.label+'=>'+field.required+"=>"+field.value);
      if(field.required && !field.value && field.type != 'checkbox'){
        //swal('Error','Please enter '+field.label,'error');
        valid = false;
        return false;
      }
      if(field.required && field.regex){
        let regex = new RegExp(field.regex);
        if(regex.test(field.value) == false){
         // swal('Error',field.errorText,'error');
          valid = false;
          return false;
        }
      }
      if(field.required && field.type == 'checkbox'){
        if(field.values.filter(r=>r.selected).length == 0){
         // swal('Error','Please enterrr '+field.label,'error');
          valid = false;
          return false;
        }

      }
    });
    if(!valid){
      return false;
    }
    let input = new FormData;
    input.append('formId',this.model._id);
    input.append('attributes',JSON.stringify(this.model.attributes))
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   swal('Error',error.message,'error');
    // });
  }
  openPreview() {
    this.modal2=true
  }
test(){

}
editProperty(val) {
  console.log(val.toggle)
  val.toggle = true;
}

openmodal(){
  this.modal=true;
}
}
