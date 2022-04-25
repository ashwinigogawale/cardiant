import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rn_Fb_Header } from '../../../../models/Rn_Fb_Header';
import { AlertService } from '../../../../services/alert.service';
import { ModulesetupService } from '../../../../services/api/modulesetup.service';
import { WireframeService } from '../../../../services/api/wireframe.service';
import { ExcelService } from '../../../../services/excel.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { WireframeLineService } from '../../../../services/api/wireframe-line.service';
import { Rn_Fb_Lines } from '../../../../models/Rn_Fb_Lines';
@Component({
  selector: 'app-allwireframe',
  templateUrl: './allwireframe.component.html',
  styleUrls: ['./allwireframe.component.scss']
})
export class AllwireframeComponent implements OnInit {
  basic: boolean = false;
  columns: any[];
  rows: any[];
  temp = [];
  isLoading: boolean = false;
  rowSelected :any= {};
  modaldelete=false;
  modaladd=false;
  loading = false;
  moduleId: number;
  wireFrames: Rn_Fb_Header[];
  selected: any[] = [];
  fbHeader: Rn_Fb_Header;
  id: any;
  allLines: any;
  lineOfHeader: Array<any>;
  fbLine: Rn_Fb_Lines;

  tools1 = [
    {

      title: "Start from scratch",
      action: "../project/modules/wireframe/types",
    },
    {
      title: "import from Templates",
      action: "../create-table",
    },
   {
      title: "Import from  public project",
      action: "../dashboard",
    },
  ];
  constructor( private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private excel: ExcelService,
    private moduleService: ModulesetupService,
    private wireframeService: WireframeService,
    private alertService: AlertService,
    private toastr: ToastrService,
    private _line: WireframeLineService)
     {this.lineOfHeader = new Array<any>(); }

  ngOnInit(): void {
    this.fbLine = new Rn_Fb_Lines();
    this.id = this.route.snapshot.params["id"]; // fb_header_id
    this.moduleId = this.wireframeService.getModuleId(); // get from session storage
    console.log(this.moduleId);

    this.getModuleWireframes(this.moduleId);
  }
  getModuleWireframes(id: number) {
    this.isLoading = true;
    //this.moduleService.getById(id).subscribe((data) => {
      this.wireframeService.getAll(id).subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      //this.wireFrames = data.rn_fb_headers;
      this.wireFrames = data.items;
      console.log('wireframes: ', this.wireFrames);
      this.rows = this.wireFrames;
      //this.temp = [...this.wireFrames];
    });
  }
  goToAdd() {
    this.modaladd=true;
    //this.router.navigate(["../project/modules/wireframe/types"], { relativeTo: this.route });

  }
  goToEdit(id: number,editmode: string) {
    this.router.navigate(["../project/modules/wireframe/edit/" + id], { relativeTo: this.route });

  }
  goToEdit2(id: number,editmode: string) {
    this.router.navigate(["../project/modules/wireframe/edit2/" + id], { relativeTo: this.route });

  }

  update(id: any,editmode: string) {
    this.router.navigate(["../project/modules/wireframe/update/" + id], { relativeTo: this.route });
    this._line.getAllLines().subscribe(
      (data: any)=>{
        this.allLines = data;
        for(let line of data){
          if(line.header_id == id){
            this.lineOfHeader.push(line);
          }
        }
        console.log(this.lineOfHeader);

      },
      (error: any)=>{
        console.log('Error occured while getting all lines data...');

      }
    );
  }
  onExport() {
    this.excel.exportAsExcelFile(this.rows, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  onDelete(row) {
    this.rowSelected = row;
     this.modaldelete=true;
  }

  delete(id)
  {
    this.modaldelete = false;
    console.log("in delete  "+id);
    this.wireframeService.deleteField(id).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
    );
  }
  buildDynamicForm(data) {
    this.fbHeader = data;
    console.log(data);
    let techStack = this.fbHeader.techStack;
    let objectType = this.fbHeader.objectType;
    let subObjectType = this.fbHeader.subObjectType;
    var re = /-/gi;
    var str = "Spring-mvc";
    var newstr = str.replace(re, "_");
    //console.log("id ",this.id);
console.log("id",data.id);
    console.log("new string::",newstr);

    console.log("tech stack::",techStack);

    let actionLink =
      techStack + "_" + objectType + "_" + subObjectType + "_Builder";
    actionLink = actionLink.replace(" ", "_");
    actionLink = actionLink.replace(re, "_");
    console.log("tech stack after::",actionLink);
    console.log("Dynamic Builder Action Link : ", actionLink);

    this.wireframeService.dynamicBuilder(data.id, actionLink).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
