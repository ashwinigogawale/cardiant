import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from 'src/app/services/api/user-profile.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Sys_Account } from 'src/app/services/api/user-registration.service'
@Component({
  selector: 'app-myworkspace',
  templateUrl: './myworkspace.component.html',
  styleUrls: ['./myworkspace.component.scss']
})
export class MyworkspaceComponent implements OnInit {

  sys_account: Sys_Account;

  userEmail: string;
  companyName: string;
  workspace: string;
  gstNumber: string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.getUserAccount();
    this.getUserRoles();
  }
  getUserAccount() {
    this.userProfileService.getUserAccountDetails().subscribe(resp => {
      this.sys_account = resp;
    }, err => {console.log(err);}
    )
  }


  addUsers() {
    this.router.navigate(["../users"], { relativeTo: this.route });
  }

  goToResetPassword() {
    this.router.navigate(["../passwordreset"], { relativeTo: this.route });
  }

  roles: string[]
  role: string;
  getUserRoles() {
    const role = this.userInfoService.getRoles();
    console.log('roles = ', role);

    if(role !== null) {
      this.roles = role.split(',');
    }
    this.role = role;
    console.log(this.role);
  }

  isAdmin() :boolean {
    const role: string = this.userInfoService.getRoles();
    if(role.includes('ADMIN')) {
      return true;
    }
    return false;
  }
}
