import { DatePipe } from "@angular/common";

export class MemberStatus {

    memberId !:number;
    dose1date !:DatePipe;
    dose1status !:boolean;
    dose2date !:DatePipe;
    dose2status !:boolean;

}
