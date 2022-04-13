import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModulesetupService } from '../../../services/api/modulesetup.service';
import { WireframeService } from '../../../services/api/wireframe.service';
import { ExcelService } from '../../../services/excel.service';
import { Rn_Fb_Header } from '../../../models/Rn_Fb_Header';
@Component({
  selector: 'app-wireframe-card',
  templateUrl: './wireframe-card.component.html',
  styleUrls: ['./wireframe-card.component.scss']
})
export class WireframeCardComponent implements OnInit {
  moduleId: number;
  wireFrames: Rn_Fb_Header[];
  isLoading: boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private excel: ExcelService,
    private moduleService: ModulesetupService,
    private wireframeService: WireframeService,) { }

  ngOnInit(): void {
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

    });
  }
  goToAdd() {

    this.router.navigate(["../project/modules/wireframe/types"], { relativeTo: this.route });


  }
}
