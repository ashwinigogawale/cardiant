import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { ValidationError} from '../../../../models/ValidationError';
import { AlertService } from '../../../../services/alert.service';
import { DropDown,DropdownService } from '../../../../services/api/dropdown.service';
import { ModulesetupService } from '../../../../services/api/modulesetup.service';
@Component({
  selector: 'app-addmodule-setup',
  templateUrl: './addmodule-setup.component.html',
  styleUrls: ['./addmodule-setup.component.scss']
})
export class AddmoduleSetupComponent implements OnInit {
  public entryForm: FormGroup;
  submitted = false;
  basic: boolean = false;
  //fieldError: ValidationError[] = [];
  projectId: number;
  constructor(private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private moduleSetupService: ModulesetupService,
    private alertService: AlertService,
    private dropdownService: DropdownService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.projectId = +params['p_id'];
    });

    this.getAllProjects();
    //this.getAllModuless();


    this.entryForm = this._fb.group({
      moduleName: [null],
      description: [null],
      modulePrefix: [null],
      projectId:[null]
    });

    // copy form
    this.copyModuleForm = this._fb.group({
      from_projectId: [null],
      from_moduleId: [null],
      to_moduleName: [null]
    });
  }
  onSubmit() {

    this.submitted = true;
    if (this.entryForm.invalid) {
      return;
    }
    this.onCreate();
  }

  onCreate() {
   // this.fieldError = [];
    this.entryForm.value.projectId=this.projectId;
    console.log(this.entryForm.value);
    this.moduleSetupService.create(this.entryForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["../../../modules"], { relativeTo: this.route, queryParams: { p_id: this.projectId } });
        //this.router.navigate(["../all"],{ relativeTo: this.route, queryParams: { p_id: this.projectId } });
      },
      (error) => {
        console.log(error);
        const objectArray = Object.entries(error.error.fieldErrors);
        objectArray.forEach(([k, v]) => {
          console.log(k);
          console.log(v);
         // this.fieldError.push({ field: k, message: v });
        });
        if (this.entryForm.value) {
          this.toastr.success('Added successfully');
              }
        //console.log(this.fieldError); // this will come from backend
      }
    );
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

    // need modification
    modules: DropDown[];
    /* getAllModuless() {
      this.dropdownService.getModules().subscribe(res => {
        console.log('module list ', res);
        this.modules = res;
      }, (err) => {
        console.log(err);
      });
    } */
    changeModule(id: number) {
      console.log('project id : ', id);
      this.dropdownService.getProjectModuleList(id).subscribe(res => {
        console.log('module list ', res);
        this.modules = res;
      }, (err) => {
        console.log(err);
      });
    }





   // copy wireframe
   copyModuleForm: FormGroup;
   coppied = false;
   copyModule() {
     console.log(this.copyModuleForm.value);
     this.coppied = true;
     if (this.copyModuleForm.invalid) {
       return;
     }
     this.moduleSetupService.copy(this.copyModuleForm.value).subscribe(data => {
       console.log(data);
       //this.alertService
       this.router.navigate(["../all"],{ relativeTo: this.route, queryParams: { p_id: this.projectId } });
     }, (err) => {
       console.log(err);
       //this.alertService
     });
   }
}
