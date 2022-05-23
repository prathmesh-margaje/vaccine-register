import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberStatusComponent } from './component/add-member-status/add-member-status.component';
import { AddVaccineRegistrationComponent } from './component/add-vaccine-registration/add-vaccine-registration.component';
import { CreateMemberComponent } from './component/create-member/create-member.component';
import { MemberDetailsComponent } from './component/member-details/member-details.component';
import { MemberListComponent } from './component/member-list/member-list.component';
import { MemberStatusDetailsComponent } from './component/member-status-details/member-status-details.component';
import { UpdateMemberStatusComponent } from './component/update-member-status/update-member-status.component';
import { UpdateMemberComponent } from './component/update-member/update-member.component';

const routes: Routes = [
  {path : 'add-member' , component : CreateMemberComponent},
  {path : 'member-list', component : MemberListComponent},
  {path : 'updatemember/:idCard', component : UpdateMemberComponent},
  {path : 'detailsmember/:idCard', component : MemberDetailsComponent},
  
  // {path : 'add-vaccine-registration' , component : AddVaccineRegistrationComponent},

  {path : 'add-memberstatus', component : AddMemberStatusComponent},
  {path : 'memberstatus-details', component : MemberStatusDetailsComponent},
  {path : 'memberstatus-update/:id', component : UpdateMemberStatusComponent},

  {path : '' , redirectTo : 'member-list', pathMatch : "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
