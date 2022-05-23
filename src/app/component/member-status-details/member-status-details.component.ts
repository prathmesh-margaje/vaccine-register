import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberStatus } from 'src/app/class/member-status';
import { MemberStatusService } from 'src/app/service/member-status.service';

@Component({
  selector: 'app-member-status-details',
  templateUrl: './member-status-details.component.html',
  styleUrls: ['./member-status-details.component.css']
})
export class MemberStatusDetailsComponent implements OnInit {

  member!: Observable<MemberStatus[]>;

  constructor(private memberService: MemberStatusService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {
    this.member = this.memberService.allMember();
  }

  deleteMember(memberId: number) {
     this.memberService.deleteMember(memberId).subscribe(data => {
       console.log(data);
       this.reloadData();
     },
     error => console.log(error));
  }

  memberDetails(idCardId: number) {
    this.router.navigate(['membersStatus',idCardId]);
  }
}
