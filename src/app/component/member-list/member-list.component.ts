import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from 'src/app/class/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members !: Observable<Member[]>;
  constructor(private memberService : MemberService, private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.members = this.memberService.getMemberList();
  } 

  deleteMember (idCard : number){
    this.memberService.deleteMember(idCard).subscribe(data => {
      console.log (data );
      this.reloadData();
    },
    error => console.log(error))
  }

  updateIdCard(idCard: number) {
    this.router.navigate(['/updatemember', idCard]);
  }


  idCardDetails(idCard: number){
    this.router.navigate(['/detailsmember', idCard]);
  }

  }


  
 
