import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ActiveTechnology } from "../../../../models/ActiveTechnology";
import { ProjectSetup } from "../../../../models/Project_setup";
import { ValidationError } from '../../../../models/ValidationError';
import { DropdownService } from '../../../../services/api/dropdown.service';
import { ProjectSetupService } from "../../../../services/api/project-setup.service";
import { TechnologyStackService } from "../../../../services/api/technology-stack.service";
@Component({
  selector: 'app-editprojectsetup',
  templateUrl: './editprojectsetup.component.html',
  styleUrls: ['./editprojectsetup.component.scss']
})
export class EditprojectsetupComponent implements OnInit {
  updated = false;
  project: ProjectSetup;
  id: number;
  tech_stacks=[];
  errorFields: ValidationError[] = [];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private projectSetupService: ProjectSetupService,
    private technologyStackService: TechnologyStackService,
    private dropdownService: DropdownService) { }

  ngOnInit(): void {
    this.project = new ProjectSetup();
    this.activeTechnologyDropdown();

    this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id);

     //for dynamic tech stack
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
  getById(id: number) {
    this.projectSetupService.getById(id).subscribe(
      (data) => {
        this.project = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update() {
    this.projectSetupService.update(this.id, this.project).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["../../../project1"], { relativeTo: this.route });
      },

    );

  }

  onSubmit() {
    this.updated = true;
    this.update();
  }


  activeTechnologyDropDown: ActiveTechnology[];
  activeTechnologyDropdown() {
    this.technologyStackService.getActiveTechnology().subscribe((data) => {
      console.log(data);
      this.activeTechnologyDropDown = data;
    });
  }

  back() {
    this.router.navigate(["../../all"], { relativeTo: this.route });
  }

}
