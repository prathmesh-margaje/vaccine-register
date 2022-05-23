import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateMemberComponent } from './component/create-member/create-member.component';
import { UpdateMemberComponent } from './component/update-member/update-member.component';
import { MemberDetailsComponent } from './component/member-details/member-details.component';
import { MemberListComponent } from './component/member-list/member-list.component';
import { AddVaccineRegistrationComponent } from './component/add-vaccine-registration/add-vaccine-registration.component';
import { AddMemberStatusComponent } from './component/add-member-status/add-member-status.component';
import { MemberStatusDetailsComponent } from './component/member-status-details/member-status-details.component';
import { UpdateMemberStatusComponent } from './component/update-member-status/update-member-status.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    UpdateMemberComponent,
    MemberDetailsComponent,
    MemberListComponent,
    AddVaccineRegistrationComponent,
    AddMemberStatusComponent,
    MemberStatusDetailsComponent,
    UpdateMemberStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
