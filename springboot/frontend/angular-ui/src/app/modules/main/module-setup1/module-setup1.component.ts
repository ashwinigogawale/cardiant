import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModuleSetup } from '../../../models/Module_Setup';
import { ModulesetupService } from '../../../services/api/modulesetup.service';
import { WireframeService } from '../../../services/api/wireframe.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-module-setup1',
  templateUrl: './module-setup1.component.html',
  styleUrls: ['./module-setup1.component.scss']
})
export class ModuleSetup1Component implements OnInit {
  gridViewIsActive: boolean = true;
  apps: Array<ModuleSetup> = [];
  projectId: any;
  isLoading: boolean = false;
  modules: ModuleSetup[];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private mainService: ModulesetupService,
    private wireframeService: WireframeService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.wireframeService.removeModuleId();
    this.route.queryParams.subscribe(params => {
      this.projectId = +params['p_id'];
    });

    //this.initCopyRuleForm();
    this.getProjectModules(this.projectId);
  }
  getProjectModules(id: number) {
    this.isLoading = true;
    this.mainService.getProjectModules(id).subscribe((data) => {
      this.isLoading = false;
      console.log(data);
      this.modules = data.items;

    });
  }
suregit(){
  this.router.navigate(["../suregit"], { relativeTo: this.route });

}
goToAdd() {
  this.router.navigate(["../project/modules/add"], { relativeTo: this.route, queryParams: { p_id: this.projectId } });
}
}
