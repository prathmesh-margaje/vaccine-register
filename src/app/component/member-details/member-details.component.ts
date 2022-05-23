import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/class/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {


  idCard: number = 0;
  member : Member = new Member();

  constructor(private route : ActivatedRoute , private router : Router ,
    private memberService : MemberService) { }

  ngOnInit(): void {
    this.member= new Member();
    this.idCard = this.route.snapshot.params['idCard'];
    this.memberService.getMemberById(this.idCard).subscribe(data => {
      console.log(data) ;
      this.idCard= data;
    },
    error => console.log(error))
  };

  list() {
    this.router.navigate(['/member-list']);
  }
  

}
