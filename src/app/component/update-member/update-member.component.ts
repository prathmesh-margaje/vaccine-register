import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/class/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  idCard: number =0 ;
  member : Member = new Member();
  submitted = false

  constructor(private route : ActivatedRoute , private router : Router ,
    private memberService : MemberService) { }

  ngOnInit(): void {
    this.member = new Member();
    this.idCard = this.route.snapshot.params['idCard'];
    this.memberService.getMemberById(this.idCard).subscribe(data => {
      console.log(data);
      this.member =data;
    },
    error => console.log(error))
   };

   updateMember (){
     alert("id :")
    this.memberService.updateMember(this.idCard, this.member).subscribe(data => {
      console.log(data);
      this.member = new Member();
      this.gotoList();

    },
    error => console.log(error))
  }

  onSubmit(createForm: { value: any }) {
    this.submitted = true;
    this.updateMember();    
  }

  gotoList() {
    this.router.navigate(['/member-list']);
  }


  }



