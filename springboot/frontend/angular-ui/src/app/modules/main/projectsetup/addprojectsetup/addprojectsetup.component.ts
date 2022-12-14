import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ActiveTechnology } from "../../../../models/ActiveTechnology";
//import { ValidationError } from '../../../../models/ValidationError';
import {DropDown, DropdownService } from "../../../../services/api/dropdown.service";
import { ProjectSetupService } from "../../../../services/api/project-setup.service";
import { TechnologyStackService } from "../../../../services/api/technology-stack.service";
@Component({
  selector: 'app-addprojectsetup',
  templateUrl: './addprojectsetup.component.html',
  styleUrls: ['./addprojectsetup.component.scss']
})
export class AddprojectsetupComponent implements OnInit {
  public entryForm: FormGroup;
  submitted = false;
  basic: boolean = false;
  //errorFields: ValidationError[] = [];
  tech_stacks = [];
  constructor(private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private projectSetupService: ProjectSetupService,
    private technologyStackService: TechnologyStackService,
    private dropdownService: DropdownService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getAllProjects();

    this.activeTechnologyDropdown();

   this.entryForm = this._fb.group({
     projectName: [null],
     description: [null],
     technologyStack: [null],
     techStackId: [null],
     projectPrefix: [null],
     dbName: [null],
     dbUserName: [null],
     dbPassword: [null],
     portNumber: ['3306'],
     namespace: [null],
     tags:[null],
     category:[null],
    accessibility:[null]
   });

    // copy form
    this.copyProjectForm = this._fb.group({
     from_projectId: [null],
     to_projectName: [null],
     to_tech_stack: [null]
   })
    // for dynamic tech stack
    this.technologyStackService.getAll().subscribe((data)=>{
      console.log(data)

      for(let ts of data.items)
      {
        if(ts.tech_stack==null)
        {
          return;
        }
        console.warn(ts.tech_stack);

        this.tech_stacks.push(ts.tech_stack)

      }

    });
  }
  onSubmit() {
    console.log(this.entryForm.value);
    this.submitted = true;
    if (this.entryForm.invalid) {
      return;
    }
    this.onCreate();
  }
// add project temporrary commit

  onCreate() {
    //this.errorFields = [];
    this.projectSetupService.create(this.entryForm.value).subscribe(
      (data) => {
        console.log(data);
       this.router.navigate(["../../project/all"], { relativeTo: this.route });
      },

    );
    if (this.entryForm.value) {
      this.toastr.success('Added successfully');
          }
  }
goback(){
  this.router.navigate(["../../project/all"], { relativeTo: this.route });
}
  // need modification
  projects: DropDown[];
  getAllProjects() {
    this.dropdownService.getProjects().subscribe(res => {
      console.log('project list ', res);
      this.projects = res;
    }, (err) => {
      console.log(err);
    });
  }


  activeTechnologyDropDown: ActiveTechnology[];
   activeTechnologyDropdown() {
     this.technologyStackService.getActiveTechnology().subscribe(data => {
      console.log(data);
      this.activeTechnologyDropDown = data;
     })
   }

   // copy project
   copyProjectForm: FormGroup;
   coppied = false;
   copyProject() {
     console.log(this.copyProjectForm.value);
     this.coppied = true;
     if (this.copyProjectForm.invalid) {
       console.log("this form is invalid custome comment");

       return;
     }
     this.projectSetupService.copy(this.copyProjectForm.value).subscribe(data => {
       //console.log("ganesh bute data",data);
       this.router.navigate(["../../project1"],{ relativeTo: this.route });
     }, (err) => {
       console.log("in error page");

       console.log(err);
     });
   }
}
