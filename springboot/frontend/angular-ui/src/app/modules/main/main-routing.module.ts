import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { UniversityComponent } from './university/university.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
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
import { DepartmentComponent } from './department/department.component';
import { CustomerprocessComponent } from './customerprocess/customerprocess.component';
import { InvoicelookupComponent } from './invoicelookup/invoicelookup.component';
import { InvoicebillComponent } from './invoicebill/invoicebill.component';
import { InvoiceTyperulesComponent } from './invoice-typerules/invoice-typerules.component';
import { CustomerLinecodeComponent } from './customer-linecode/customer-linecode.component';
import { TOSComponent } from './tos/tos.component';
import { NcsoaddComponent } from './ncsoadd/ncsoadd.component';
import { RegularCreditNoteComponent } from './regular-credit-note/regular-credit-note.component';
import { RegularaddComponent } from './regularadd/regularadd.component';
import { RegularCNApprovalComponent } from './regular-cnapproval/regular-cnapproval.component';
import { RegularviewComponent } from './regularview/regularview.component';
import { RegulareditComponent } from './regularedit/regularedit.component';
import { UsermaintanceComponent } from './usermaintance/usermaintance.component';
import { UsermaintanceaddComponent } from './usermaintanceadd/usermaintanceadd.component';
import { UsermaintanceeditComponent } from './usermaintanceedit/usermaintanceedit.component';
import { UsergrpmaintenanceComponent } from './usergrpmaintenance/usergrpmaintenance.component';
import { MenuaccesscontrolComponent } from './menuaccesscontrol/menuaccesscontrol.component';
import { NcspapprovalreadComponent } from './ncspapprovalread/ncspapprovalread.component';
import { NcspapprovaleditComponent } from './ncspapprovaledit/ncspapprovaledit.component';
import { OpencreditnoteComponent } from './opencreditnote/opencreditnote.component';
import { OpencreditnoteaddComponent } from './opencreditnoteadd/opencreditnoteadd.component';
import { NcsoeditComponent } from './ncsoedit/ncsoedit.component';
import { LogconfigComponent } from './logconfig/logconfig.component';
import { AuditTrailReportComponent } from './audit-trail-report/audit-trail-report.component';
import { AuthGuard } from 'src/app/services/auth_guard.service';
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
      {path:'formbuilder',component:FormbuilderComponent},
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
      {path: 'form',component:FormComponent},
      {path: 'form2/:id',component:Form2Component},
      {path: 'ncso' , component:NcsoaddComponent},
      {path: 'ncsoedit/:id' , component:NcsoeditComponent},
      {path: 'ncsoread/:id' , component:NcspapprovalreadComponent},
      {path: 'ncsoappedit/:id' , component:NcspapprovaleditComponent},
      {path: 'audit' , component:AuditTrailReportComponent},
     // {path: 'lazy' , component:LazyloadingComponent},
      {path:'log',component:LogconfigComponent},
      {path: 'regularcreditnote', component:RegularCreditNoteComponent},
      {path: 'opencreditnote',component:OpencreditnoteComponent},
      {path: 'opencreditnoteadd',component:OpencreditnoteaddComponent},
      {path: 'regularadd', component:RegularaddComponent},
      {path: 'regularedit', component:RegulareditComponent},
      {path: 'regularapproval', component:RegularCNApprovalComponent},
      {path: 'regularview', component:RegularviewComponent},
     { path: 'passwordreset', component: PasswordResetComponent },
     { path: 'profile-settings', component: ProfileSettingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'customer', component: CustomerprocessComponent },
      { path: 'invoicelookup', component: InvoicelookupComponent },
      { path: 'invoicebill', component: InvoicebillComponent },
      { path: 'invoicetyperule', component: InvoiceTyperulesComponent },
      { path: 'customerlinecode', component:CustomerLinecodeComponent },
      { path: 'tos', component:TOSComponent },
      {path:'project1',component:Projectsetup1Component},
      {path:'module1',component:ModuleSetup1Component},
      {path: 'dashboard', component:DashboardComponent,
      children: [
        { path: '', redirectTo: 'order', pathMatch: 'full' },
        { path: 'order', component: OrderstatComponent },

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
