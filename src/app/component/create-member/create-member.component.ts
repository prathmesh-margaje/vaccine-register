import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/class/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  member : Member = new Member();
  submitted = false;

  constructor(private memberService : MemberService, private router : Router) { }

  ngOnInit(): void {
  }

  newMember(): void {
    this.submitted=false;
    this.member= new Member();
  }


save (){
  this.memberService.addMember(this.member).subscribe(data => {
    console.log(data);
    this.member = new Member();
    this.gotoList();
  },
  error => console.log(error));
}

onSubmit(createForm: { value: any }) {
  this.submitted = true;
  this.save();    
}


gotoList() {
  return this.router.navigate(['/member-list']);
}

}
