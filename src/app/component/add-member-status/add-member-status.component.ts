import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberStatus } from 'src/app/class/member-status';
import { MemberStatusService } from 'src/app/service/member-status.service';

@Component({
  selector: 'app-add-member-status',
  templateUrl: './add-member-status.component.html',
  styleUrls: ['./add-member-status.component.css']
})
export class AddMemberStatusComponent implements OnInit {

  memberStatus: MemberStatus = new MemberStatus();
  submitted: boolean = false;

  constructor(private memberStatusService: MemberStatusService, private router: Router) { }

  ngOnInit(): void {
  }

    newMember(): void {
      this.submitted=false;
      this.memberStatus= new MemberStatus();
    }

    save() {
      this.memberStatusService.addMember(this.memberStatus).subscribe(data => {
        console.log(data)
        console.log (this.memberStatus)
        this.memberStatus = new MemberStatus();
        this.gotoList();
      },
        error => console.log(error));
    }

    onSubmit() {
      this.submitted = true;
      this.save();
    }
  
    gotoList() {
      this.router.navigate(['/member-list']);
    }


//   memberForm !: FormGroup;

//   member:MemberStatus[];
//   isUpdate:boolean=false;
//   constructor(private fb: FormBuilder, private service: MemberStatusService) {
//     this.member= new Array();
//   }

//  ngOnInit(): void {
  
//   console.log("ng on init");
//     this.memberForm = this.fb.group({
//       id: ['', Validators.required],
//       dose1date: [''],
//       dose1status: ['',Validators.required],
//       dose2date:[''],
//       dose2status: ['',Validators.required],
//     });

//     this.service.allMember()
//     .subscribe(
//       data => { this.member = data;}, 
//       err => {console.log(err)} 
      
//       );
//     }
//     saveMember(): void {
//       let mem:MemberStatus=this.memberForm.value;
//       if(!this.isUpdate){
//         this.service.addMember(mem)
//         .subscribe(data => {
//           alert("Id is:"+data.id);
//          this.service.allMember().subscribe(mem => {
//             this.member = mem;
//           });
//         });
//       }
//       else{
//         this.service.updateMember(mem).subscribe(data => {
//           alert("Member  is Updated");
//           this.service.allMember().subscribe(mem => {
//             this.member= mem;
//                });
//         });
//         this.isUpdate=false;
//       }
//       this.memberForm.reset();
      
      
//     }

//       updateMember(id:number) {
//       let src : any= this.member.find(s => s.id == id)
//       this.memberForm = this.fb.group({
//         id: [src.id, Validators.required],
//         dose1status: [src.dose1status, Validators.required],
//         dose2status: [src.dose2status, Validators.required],
//         dose1date:[src.dose1date],
//         dose2date:[src.dose2date]

//       });
//       this.isUpdate=true;
//     }
//     deleteMember(id:number) {
//       let candelete = confirm(`Are you Sure to Delete Member '${id}'`);
//       if (candelete==true) {
//         this.service.deleteMember(id).subscribe(data => {
//           alert("Deleted Successfully");
//           this.service.allMember().subscribe(mem => {
//             this.member = mem;
//           });
//         });
//       }
//     }


  }
  

