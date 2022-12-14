import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { HelperModule } from '../../pipes/helpers.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UniversityComponent } from './university/university.component';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderstatComponent } from './orderstat/orderstat.component';
import { MenuGroupComponent } from './menu-group/menu-group.component';
import { AllMenuGroupComponent } from './menu-group/all/all-menu-group.component';
import { EditMenuGroupComponent } from './menu-group/edit/edit-menu-group.component';
import { ReadOnlyMenuGroupComponent } from './menu-group/read-only/readonly-menu-group.component';
import { MenuRegisterComponent } from './menu-register/menu-register.component';
import { AddMenurComponent } from './menu-register/add-menur/add-menur.component';
import { EditMenurComponent } from './menu-register/edit-menur/edit-menur.component';
import { AllMenurComponent } from './menu-register/all-menur/all-menur.component';
import { ReadonlyMenurComponent } from './menu-register/readonly-menur/readonly-menur.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { UsermaintanceComponent } from './usermaintance/usermaintance.component';
import { UsermaintanceaddComponent } from './usermaintanceadd/usermaintanceadd.component';
import { UsermaintanceeditComponent } from './usermaintanceedit/usermaintanceedit.component';
import { UsergrpmaintenanceComponent } from './usergrpmaintenance/usergrpmaintenance.component';
import { MenuaccesscontrolComponent } from './menuaccesscontrol/menuaccesscontrol.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogconfigComponent } from './logconfig/logconfig.component';
import { TwodigitDirective } from './twodigit.directive';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulepipelineComponent } from './schedulepipeline/schedulepipeline.component';
import { ScheduleInfoComponent } from './schedule-info/schedule-info.component';
import { SystemparametersComponent } from './systemparameters/systemparameters.component';
import { MenumaintanceComponent } from './menumaintance/menumaintance.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';
import { DocumentreferenceComponent } from './documentreference/documentreference.component';
import { DocumentstructureComponent } from './documentstructure/documentstructure.component';
import { Projectsetup1Component } from './projectsetup1/projectsetup1.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { ProjectsetupComponent } from './projectsetup/projectsetup.component';
import { AddprojectsetupComponent } from './projectsetup/addprojectsetup/addprojectsetup.component';
import { AllprojectsetupComponent } from './projectsetup/allprojectsetup/allprojectsetup.component';
import { EditprojectsetupComponent } from './projectsetup/editprojectsetup/editprojectsetup.component';
import { ModuleSetup1Component } from './module-setup1/module-setup1.component';
import { ModuleCardComponent } from './module-card/module-card.component';
import { ModuleSetupComponent } from './module-setup/module-setup.component';
import { AddmoduleSetupComponent } from './module-setup/addmodule-setup/addmodule-setup.component';
import { AllmoduleSetupComponent } from './module-setup/allmodule-setup/allmodule-setup.component';
import { EditmoduleSetupComponent } from './module-setup/editmodule-setup/editmodule-setup.component';
import { WireframeComponent } from './wireframe/wireframe.component';
import { AllwireframeComponent } from './wireframe/allwireframe/allwireframe.component';
import { AddwireframeComponent } from './wireframe/addwireframe/addwireframe.component';
import { EditwireframeComponent } from './wireframe/editwireframe/editwireframe.component';
import { Edit2wireframeComponent } from './wireframe/edit2wireframe/edit2wireframe.component';
import { UpdateWireframeComponent } from './wireframe/update-wireframe/update-wireframe.component';
import { WireframetypeComponent } from './wireframe/wireframetype/wireframetype.component';
import { PropertiesComponent } from './wireframe/properties/properties.component';
import { PropertyComponent } from './wireframe/property/property.component';
import { UinameeditComponent } from './wireframe/uinameedit/uinameedit.component';
import { ActionsComponent } from './wireframe/actions/actions.component';
import { SuredocrComponent } from './suredocr/suredocr.component';
import { SurefarmComponent } from './surefarm/surefarm.component';
import { SuregitComponent } from './suregit/suregit.component';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Wireframe1Component } from './wireframe1/wireframe1.component';
import { WireframeCardComponent } from './wireframe-card/wireframe-card.component';
import { Report2Component } from './report2/report2.component';
import { ReporttypeComponent } from './report2/reporttype/reporttype.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { AddComponent } from './report-builder/add/add.component';
import { AllComponent } from './report-builder/all/all.component';
import { EditComponent } from './report-builder/edit/edit.component';
import { RbTableSetupComponent } from './rb-table-setup/rb-table-setup.component';
import { RbColumnSetupComponent } from './rb-column-setup/rb-column-setup.component';
import { RbWhereColumnSetupComponent } from './rb-where-column-setup/rb-where-column-setup.component';
import { RbDateParamSetupComponent } from './rb-date-param-setup/rb-date-param-setup.component';
import { ScienceComponent } from './science/science.component';
import { ProjectviewComponent } from './module-setup/projectview/projectview.component';
import { ArchievedComponent } from './archieved/archieved.component';
import { AllprojectComponent } from './allproject/allproject.component';
import { AllprojectcardComponent } from './allprojectcard/allprojectcard.component';
import { SurebuilderComponent } from './surebuilder/surebuilder.component';
import { HttpClientModule } from '@angular/common/http';
import { SureboardComponent } from './sureboard/sureboard.component';
import { MyworkspaceComponent } from './myworkspace/myworkspace.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { GitfolderComponent } from './gitfolder/gitfolder.component';
import { Gitfolder1Component } from './gitfolder1/gitfolder1.component';
import { GitfileComponent } from './gitfile/gitfile.component';
import { Gitfile1Component } from './gitfile1/gitfile1.component';
import { Gitfolder2Component } from './gitfolder2/gitfolder2.component';









@NgModule({
  declarations: [
    MainPageComponent, PageNotFoundComponent,AboutComponent, LayoutComponent, UserComponent,PasswordResetComponent,UniversityComponent,
     DashboardComponent, OrderstatComponent,MenuGroupComponent, AllMenuGroupComponent, EditMenuGroupComponent, ReadOnlyMenuGroupComponent,
   MenuRegisterComponent, AddMenurComponent, EditMenurComponent, AllMenurComponent, ReadonlyMenurComponent,ProfileSettingComponent,
    UsermaintanceComponent, UsermaintanceaddComponent, UsermaintanceeditComponent, UsergrpmaintenanceComponent, MenuaccesscontrolComponent,
    LogconfigComponent, TwodigitDirective, ScheduleComponent,SchedulepipelineComponent, ScheduleInfoComponent, SystemparametersComponent,
   MenumaintanceComponent,DocumentmasterComponent,DocumentreferenceComponent,DocumentstructureComponent,Projectsetup1Component,ProjectcardComponent,
  ProjectsetupComponent,AddprojectsetupComponent, AllprojectsetupComponent, EditprojectsetupComponent,ModuleSetup1Component,ModuleCardComponent,
  ModuleSetupComponent,AddmoduleSetupComponent,AllmoduleSetupComponent,EditmoduleSetupComponent,WireframeComponent, AllwireframeComponent,
  AddwireframeComponent,EditwireframeComponent,Edit2wireframeComponent,UpdateWireframeComponent,WireframetypeComponent,PropertiesComponent,
  PropertyComponent,UinameeditComponent,ActionsComponent,SuredocrComponent,SurefarmComponent,SuregitComponent,Wireframe1Component,
  WireframeCardComponent,Report2Component,ReporttypeComponent,ReportBuilderComponent,AddComponent,AllComponent,EditComponent,
  RbTableSetupComponent,RbColumnSetupComponent,RbWhereColumnSetupComponent,RbDateParamSetupComponent,ScienceComponent, ProjectviewComponent, ArchievedComponent, AllprojectComponent, AllprojectcardComponent, SurebuilderComponent, SureboardComponent, MyworkspaceComponent, UserRegistrationComponent, GitfolderComponent, Gitfolder1Component, GitfileComponent, Gitfile1Component, Gitfolder2Component,



  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    HelperModule,
    MainRoutingModule,
    DragDropModule,
    DndModule,
    HttpClientModule,
// Thirdparty Module
NgxDatatableModule,
NgxChartsModule,
Ng2SearchPipeModule,

  ]
})
export class MainModule { }
