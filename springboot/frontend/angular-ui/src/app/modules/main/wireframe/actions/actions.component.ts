import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { WireframeService } from "../../../../services/api/wireframe.service";
export interface Tools {
  title: string;
  details: string;
  action: string;
}
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  columns: any[];
  moduleId: number;
  constructor( private router: Router,
    private route: ActivatedRoute,
    private wireframeService: WireframeService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.moduleId = +params["m_id"];
    });
    this.wireframeService.storeModuleId(this.moduleId);
  }
  tools: Tools[] = [

    {
      title: "Create Table",
      details: "Create Table for Your Project",
      action: "../create-table",
    },
    {
      title: "Form Builder",
      details: "Create Form for Your Project",
      action: "../from-build",
    },
    {
      title: "Report Builder",
      details: "Generate Report for Your Project",
      action: "../reporttype",
    },
    {
      title: "Api Builder",
      details: "Create API for Your Project",
      action: "../api-build",
    },

    {
      title: "BI Builder",
      details: "Create BI for Your Project",
      action: "../bi-build",
    },
    {
      title: "Query Builder",
      details: "Create Query for Your Project",
      action: "../query-build",
    },
    {
      title: "App Builder",
      details: "Create App for Your Project",
      action: "../app-build",
    },
    {
      title: "Wireframe Builder",
      details: "Create Wireframe for Your Project",
      action: "../wireframe",
    },
  ];

  tools1= [
    {

      title: "Wireframes",
      details: "Create Wireframe for Your Project",
      action: "../wireframe",
      icon:"home"
    },
    {
      title: "Workflow",
      details: "Create Table for Your Project",
      action: "../create-table",
    },

    {
      title: "Report",
      details: "Generate Report for Your Project",
      action: "../reporttype",
    },
    {
      title: "Web Page",
      details: "Create API for Your Project",
      action: "../api-build",
    },

    {
      title: "Actions",
      details: "Create BI for Your Project",
      action: "../bi-build",
    },
    {
      title: "Permission",
      details: "Create Query for Your Project",
      action: "../query-build",
    },
    {
      title: "Jobs",
      details: "Create App for Your Project",
      action: "../app-build",
    },
    {
      title: "Dashboard",
      details: "Create Wireframe for Your Project",
      action: "../dashboard",
    },
  ];

}
