import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProjectSetupService } from '../../../../services/api/project-setup.service';
import { ExcelService } from '../../../../services/excel.service';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectSetup } from '../../../../models/Project_setup';
@Component({
  selector: 'app-allprojectsetup',
  templateUrl: './allprojectsetup.component.html',
  styleUrls: ['./allprojectsetup.component.scss']
})
export class AllprojectsetupComponent implements OnInit {
  loading = false;
  @ViewChild("getById") getById: TemplateRef<any>;
  @ViewChild("txId") txId: TemplateRef<any>;
  selected: any[] = [];
  rowSelected :any= {};
  modaldelete=false;
  modaladd=false;
  basic: boolean = false;
  columns: any[];
  rows: any[];
  temp = [];
  isLoading: boolean = false;
  project;
  projects: ProjectSetup[];


  tools1 = [
    {

      title: "Start from scratch, I have an idea",
      action: "../add",
    },
    {
      title: "My Db is ready,let import and start",
      action: "../create-table",
    },

    {
      title: "Start with sampleapp, checkout templates",
      action: "../reporttype",
    },
   {
      title: "copy from another public project",
      action: "../dashboard",
    },
  ];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private excel: ExcelService,

    private projectSetupService: ProjectSetupService,) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.projectSetupService.getAll().subscribe((data) => {
      console.log(data);
      this.project = data;
      this.project = data.items;

    });
  }
  onExport() {
    this.excel.exportAsExcelFile(this.project, 'user_',
      moment().format('YYYYMMDD_HHmmss'))
  }
  goToAdd() {
    //this.modaladd=true;
    this.router.navigate(["../add"], { relativeTo: this.route });
  }
  goToEdit(id: number) {
    this.router.navigate(["../edit/" + id], { relativeTo: this.route });
  }
  onDelete(row) {
    this.rowSelected = row;
     this.modaldelete=true;
  }

  delete(id)
  {
    this.modaldelete = false;
    console.log("in delete  "+id);
    this.projectSetupService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
    );
    if (id) {
      this.toastr.success('Deleted successfully');
          }

  }

  goToModule(id: number) {
    this.router.navigate(["../../module1"], { relativeTo: this.route, queryParams: { p_id: id } });
  }
  goTocard(){
    this.router.navigate(["../../projectcard"], { relativeTo: this.route });
  }
}
