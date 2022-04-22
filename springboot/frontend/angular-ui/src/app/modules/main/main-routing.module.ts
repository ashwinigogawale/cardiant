import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { UniversityComponent } from './university/university.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderstatComponent } from './orderstat/orderstat.component';
import { AllMenuGroupComponent } from './menu-group/all/all-menu-group.component';

import { EditMenuGroupComponent } from './menu-group/edit/edit-menu-group.component';
import { MenuGroupComponent } from './menu-group/menu-group.component';
import { ReadOnlyMenuGroupComponent } from './menu-group/read-only/readonly-menu-group.component';
import { MenuRegisterComponent } from './menu-register/menu-register.component';
import { AllMenurComponent } from './menu-register/all-menur/all-menur.component';
import { AddMenurComponent } from './menu-register/add-menur/add-menur.component';
import { EditMenurComponent } from './menu-register/edit-menur/edit-menur.component';
import { ReadonlyMenurComponent } from './menu-register/readonly-menur/readonly-menur.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { UsermaintanceComponent } from './usermaintance/usermaintance.component';
import { UsermaintanceaddComponent } from './usermaintanceadd/usermaintanceadd.component';
import { UsermaintanceeditComponent } from './usermaintanceedit/usermaintanceedit.component';
import { UsergrpmaintenanceComponent } from './usergrpmaintenance/usergrpmaintenance.component';
import { MenuaccesscontrolComponent } from './menuaccesscontrol/menuaccesscontrol.component';
import { LogconfigComponent } from './logconfig/logconfig.component';
import { AuthGuard } from '../../services/auth_guard.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulepipelineComponent } from './schedulepipeline/schedulepipeline.component';
import { ScheduleInfoComponent } from './schedule-info/schedule-info.component';
import { SystemparametersComponent } from './systemparameters/systemparameters.component';
import { MenumaintanceComponent } from './menumaintance/menumaintance.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';
import { DocumentreferenceComponent } from './documentreference/documentreference.component';
import { DocumentstructureComponent } from './documentstructure/documentstructure.component';
import { Projectsetup1Component } from './projectsetup1/projectsetup1.component';
import { ProjectsetupComponent } from './projectsetup/projectsetup.component';
import { AllprojectsetupComponent } from './projectsetup/allprojectsetup/allprojectsetup.component';
import { AddprojectsetupComponent } from './projectsetup/addprojectsetup/addprojectsetup.component';
import { EditprojectsetupComponent } from './projectsetup/editprojectsetup/editprojectsetup.component';
import { ModuleSetup1Component } from './module-setup1/module-setup1.component';
import { ModuleSetupComponent } from './module-setup/module-setup.component';
import { AllmoduleSetupComponent } from './module-setup/allmodule-setup/allmodule-setup.component';
import { AddmoduleSetupComponent } from './module-setup/addmodule-setup/addmodule-setup.component';
import { EditmoduleSetupComponent } from './module-setup/editmodule-setup/editmodule-setup.component';
import { WireframeComponent } from './wireframe/wireframe.component';
import { AllwireframeComponent } from './wireframe/allwireframe/allwireframe.component';
import { AddwireframeComponent } from './wireframe/addwireframe/addwireframe.component';
import { WireframetypeComponent } from './wireframe/wireframetype/wireframetype.component';
import { EditwireframeComponent } from './wireframe/editwireframe/editwireframe.component';
import { Edit2wireframeComponent } from './wireframe/edit2wireframe/edit2wireframe.component';
import { UpdateWireframeComponent } from './wireframe/update-wireframe/update-wireframe.component';
import { PropertyComponent } from './wireframe/property/property.component';
import { PropertiesComponent } from './wireframe/properties/properties.component';
import { UinameeditComponent } from './wireframe/uinameedit/uinameedit.component';
import { ActionsComponent } from './wireframe/actions/actions.component';
import { Wireframe1Component } from './wireframe1/wireframe1.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { AllComponent } from './report-builder/all/all.component';
import { AddComponent } from './report-builder/add/add.component';
import { EditComponent } from './report-builder/edit/edit.component';
import { ReporttypeComponent } from './report2/reporttype/reporttype.component';
import { RbTableSetupComponent } from './rb-table-setup/rb-table-setup.component';
import { ScienceComponent } from './science/science.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { ModuleCardComponent } from './module-card/module-card.component';
import { ProjectviewComponent } from './module-setup/projectview/projectview.component';







const routes: Routes = [
   //Important: The sequence of path is important as the router go over then in sequential manner
   { path: '', redirectTo: '/cns-portal/dashboard', pathMatch: 'full' },
  {
    path: 'cns-portal',
    component: LayoutComponent,
     canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      { path: 'user', component: UserComponent},
      {path: 'scheduler', component:  ScheduleComponent},
      {path: 'pipeline', component:  SchedulepipelineComponent},
      {path: 'scheduleinfo', component:  ScheduleInfoComponent},
      {path:'university',component:UniversityComponent},

      {path: 'usermaintance',component:UsermaintanceComponent},
      {path: 'usermaintanceadd',component:UsermaintanceaddComponent},
      {path: 'usermaintancedit/:id',component:UsermaintanceeditComponent},
      {path: 'usergrpmaintance',component:UsergrpmaintenanceComponent},
      {path: 'menuaccess',component:MenuaccesscontrolComponent},
      {path: 'systemparameters', component: SystemparametersComponent},
      {path: 'menumaintance', component:MenumaintanceComponent},
      {path: 'documnetmaster', component:DocumentmasterComponent},
      {path: 'documentreference', component:DocumentreferenceComponent},
      {path: 'documentstructure', component:DocumentstructureComponent},



     // {path: 'lazy' , component:LazyloadingComponent},
      {path:'log',component:LogconfigComponent},
     { path: 'passwordreset', component: PasswordResetComponent },
     { path: 'profile-settings', component: ProfileSettingComponent },
      { path: 'about', component: AboutComponent },
      {path:'project1',component:Projectsetup1Component},
      {path: 'projectcard', component:ProjectcardComponent},
      {path:'module1',component:ModuleSetup1Component},
      {path: 'modulecard', component:ModuleCardComponent},
      { path: 'actions', component: ActionsComponent },
      { path: 'wireframe', component: Wireframe1Component },
      {
        path: 'reporttype'   , component: ReporttypeComponent
      },
      {path: 'dashboard', component:DashboardComponent,
      children: [
        { path: '', redirectTo: 'order', pathMatch: 'full' },
        { path: 'order', component: OrderstatComponent },

      ]
    },
    //report builder
 { path:'report-builder' , component: ReportBuilderComponent,
 children : [
   { path: ''        , redirectTo: 'all', pathMatch: 'full'},
   { path: 'all'   , component:  AllComponent},
   { path: 'add'   , component: AddComponent },
   { path: 'edit/:id'   , component: EditComponent },
   { path: 'table-setup'   , component: RbTableSetupComponent},

   { path: 'science'   , component:  ScienceComponent},
//add_routingreport
 ]
},
    {
      path: 'menu-group', component: MenuGroupComponent,
      children: [
        { path: '', redirectTo: 'all-menu' ,pathMatch: 'full' },
        { path: 'all-menu', component: AllMenuGroupComponent },
        { path: 'edit-menu', component: EditMenuGroupComponent },
        { path: 'read-only', component: ReadOnlyMenuGroupComponent }
      ],
    },

    {
      path: 'menu-r', component: MenuRegisterComponent,
      children: [
        { path: '', redirectTo: 'all-r', pathMatch: 'full' },
        { path: 'all-r', component: AllMenurComponent },
        { path: 'add-r', component: AddMenurComponent },
        { path: 'edit-r', component: EditMenurComponent },
        { path: 'readonly-r', component: ReadonlyMenurComponent }
      ],
    },

      { path: 'project', component: ProjectsetupComponent,
      children:[
        { path: '', redirectTo: 'all', pathMatch: 'full' },
         { path: 'all',component: AllprojectsetupComponent},
         { path: 'add', component: AddprojectsetupComponent },
         { path: 'edit/:id', component: EditprojectsetupComponent },

         {
          path: 'modules', component: ModuleSetupComponent,
          children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: AllmoduleSetupComponent },
            { path: 'add', component: AddmoduleSetupComponent },
            { path: 'edit/:id', component: EditmoduleSetupComponent },
             {path: 'projectview', component: ProjectviewComponent},
            { path: 'actions', component: ActionsComponent },


 // wireframe start
 {
  path: 'wireframe', component: WireframeComponent,
  children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: AllwireframeComponent },
    { path: 'add', component :AddwireframeComponent },
    { path: 'types', component: WireframetypeComponent },

    { path: 'edit/:id', component: EditwireframeComponent },
    { path: 'edit2/:hid', component: Edit2wireframeComponent },
    { path: 'update/:id', component: UpdateWireframeComponent },
    { path: 'edit/:id/properties', component: PropertiesComponent },
    { path: 'edit/:id/property', component: PropertyComponent },



    { path: 'edit/:id/uinameedit'   , component: UinameeditComponent }

  ]
},



          ]}
              ]
            },


            { path: '**', component: PageNotFoundComponent },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
