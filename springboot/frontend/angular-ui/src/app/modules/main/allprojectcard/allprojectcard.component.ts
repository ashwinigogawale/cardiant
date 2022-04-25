import { Component, OnInit } from '@angular/core';
import { ProjectSetupService } from '../../../services/api/project-setup.service';
@Component({
  selector: 'app-allprojectcard',
  templateUrl: './allprojectcard.component.html',
  styleUrls: ['./allprojectcard.component.scss']
})
export class AllprojectcardComponent implements OnInit {
  projectsetup;
  constructor( private mainService: ProjectSetupService,) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.mainService.getAll().subscribe((data) => {
      console.log(data);
      this.projectsetup = data;
      this.projectsetup = data.items;

    });
  }
}
