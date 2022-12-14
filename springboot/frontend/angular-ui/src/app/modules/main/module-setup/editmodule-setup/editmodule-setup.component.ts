import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModuleSetup } from '../../../../models/Module_Setup';
//import { ValidationError } from '../../../../models/ValidationError';
import { ModulesetupService } from '../../../../services/api/modulesetup.service';
@Component({
  selector: 'app-editmodule-setup',
  templateUrl: './editmodule-setup.component.html',
  styleUrls: ['./editmodule-setup.component.scss']
})
export class EditmoduleSetupComponent implements OnInit {
  updated = false;
  module: ModuleSetup;
  id: number;
  projectId: number;

  //fieldErors: ValidationError[] = []; // backend validation field error message

  tech_stacks = [];
  constructor( private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private moduleSetupService: ModulesetupService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.projectId = +params['p_id'];

      console.log(this.projectId)
    });
    console.log("project id",this.projectId)

    this.module = new ModuleSetup();
    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);
  }
  getById(id: number) {
    this.moduleSetupService.getById(id).subscribe(
      (data) => {
        this.module = data;
        console.log('Module : ', this.module);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  update() {
    this.moduleSetupService.update(this.id, this.module).subscribe(
      (data) => {
        console.log(data);


        this.router.navigate(["../../../../modules"],{ relativeTo: this.route, queryParams: { p_id: this.projectId } });
      },
      // (error) => {
      //   console.log(error);
      //   const objectArray = Object.entries(error.error.fieldErrors);
      //   objectArray.forEach(([k, v]) => {
      //     console.log(k);
      //     console.log(v);
      //     this.fieldErors.push({ field: k, message: v });
      //   });
        //console.log(this.fieldErors); // this will come from backend
      // }


    );

    if (this.id) {
      this.toastr.success('Updated successfully');
          }

  }

  onSubmit() {
    this.updated = true;
    this.update();
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }
}
