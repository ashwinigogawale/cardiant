
import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService   } from '../../../services/api/login.service';
import { UserInfoService} from '../../../services/user-info.service';
import { RealnetMenuService } from '../../../services/api/realnet-menu.service';
import { Rn_Main_Menu } from '../../../models/Rn_Main_Menu';
import { MenuGroupService } from '../../../services/api/menu-group.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  collapsed = true;
  public showAppAlert:boolean = false;

  public userName: string="";
  constructor(
    private router: Router,
    private userInfoService:UserInfoService,
    private realnetMenuService: RealnetMenuService,
    private menuGroupService: MenuGroupService
  ) { this.userName = this.userInfoService.getUserName();
  }
  user_name : any;
  menus: Rn_Main_Menu[];
  menu:any
  ngOnInit() {
    this.user_name = this.userInfoService.getUserName();
    console.log('user id: ' + this.user_name);
    //this.loadMenuByAccountId();
    //this.loadMenuByMenuGroup();  loading menus backend
  }
// side nav menu-sub_menu
loadMenuByAccountId() {
  this.realnetMenuService.getByAccountId().subscribe(resp => {
          this.menus = resp;
          console.log('menu: ', this.menus);
  });
}

loadMenuByMenuGroup() {
  this.menuGroupService.getByCurrentUserMenuGroupId().subscribe(resp => {
      this.menus = resp;
      console.log('menus: ', this.menus);
  })
}


/*  menuGroup: Rn_Menu_Group_Header[];
menu_id: number;
loadMenuGroupData() {
  this.menuGroupService.getAll().subscribe(resp => {
      this.menuGroup = resp;
      this.menu_id = this.menuGroup
  });
} */





navbarSelectionChange(val){
  // console.log(val);
}

closeAppAlert(){
  this.showAppAlert=false;
}

isDisabled(input: string): boolean{
  if(input === null) {
      return true;
  } else false;
}


  onLogout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
