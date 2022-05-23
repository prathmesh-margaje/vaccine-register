import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberStatus } from 'src/app/class/member-status';
import { MemberStatusService } from 'src/app/service/member-status.service';

@Component({
  selector: 'app-update-member-status',
  templateUrl: './update-member-status.component.html',
  styleUrls: ['./update-member-status.component.css']
})
export class UpdateMemberStatusComponent implements OnInit {

  memberId: number =0 ;
  memberStatus : MemberStatus = new MemberStatus();
  submitted = false

  constructor(private route : ActivatedRoute , private router : Router ,
    private memberStatusService : MemberStatusService) { }

  ngOnInit(): void {
    this.memberStatus = new MemberStatus();
    this.memberId = this.route.snapshot.params['memberId'];
    this.memberStatusService.getMemberById(this.memberId).subscribe(data => {
      console.log(data);
      this.memberStatus =data;
    },
    error => console.log(error))
   };

   updateMember (){
     alert("id :")
    this.memberStatusService.updateMember(this.memberId, this.memberStatus).subscribe(data => {
      console.log(data);
      this.memberStatus = new MemberStatus();
      this.gotoList();

    },
    error => console.log(error))
  }

  onSubmit() {
    this.submitted = true;
    this.updateMember();    
  }

  gotoList() {
    this.router.navigate(['/member-list']);
  }
}
