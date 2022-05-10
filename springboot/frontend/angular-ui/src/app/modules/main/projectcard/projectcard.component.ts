import { Component, Input, OnInit } from '@angular/core';
import { ProjectSetup } from '../../../models/Project_setup';
import { NotificationType, Notification, NotificationService } from '../../../services/notification.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectSetupService } from '../../../services/api/project-setup.service';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.scss']
})
export class ProjectcardComponent implements OnInit {
  rowSelected :any= {};

  @Input()
  apps: Array<ProjectSetup> = [];
  projectsetup;
  constructor( private notificationService: NotificationService,
    private mainService: ProjectSetupService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,) { }

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
  showNotification(message: string, messageDetails: string) {
    this.notificationService.add(
      new Notification(
        NotificationType.Info,
        message,
        messageDetails
      )
    )
  }
  goToAdd(row) {

    this.router.navigate(["../project/add"], { relativeTo: this.route });
  }
  goToedit(id: number) {
    this.router.navigate(["../project/edit/" + id], { relativeTo: this.route });
  }
  goToModule(id: number,name:any) {
    this.router.navigate(["../modules"], { relativeTo: this.route, queryParams: { p_id: id } });
  }
  goTosureops(id:number){
    this.router.navigate(["../module1"], { relativeTo: this.route, queryParams: { p_id: id } });
  }
  // goToModule(id: number) {
  //   this.router.navigate(["../module1"], { relativeTo: this.route, queryParams: { p_id: id } });
  // }
  goTogrid(){
    this.router.navigate(["../project/all"], { relativeTo: this.route });
  }
  gotomenu(){
    // this.router.navigate(["../projectview"], { relativeTo: this.route,  });
   // document.getElementById('div2').style.display = 'block';
    if (document.getElementById('div2').style.display = 'none') {
      document.getElementById('div2').style.display = 'block';
  }   }
}
