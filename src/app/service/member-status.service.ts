import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberStatus } from '../class/member-status';

@Injectable({
  providedIn: 'root'
})
export class MemberStatusService {

  private baseUrl = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  allMember(): Observable<any> {
   return this.http.get(`${this.baseUrl}/member/all`);
  }

  addMember(memberId: MemberStatus): Observable<MemberStatus> {
    return this.http.post<MemberStatus>(`${this.baseUrl}/member/new`, memberId);
  }

  getMemberById(memberId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/member/idCardid/${memberId}`);
  }

  deleteMember(memberId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/member/delete/${memberId}`)
  }

  updateMember(memberId : number, value : any ) : Observable<object> {
    return this.http.put(`${this.baseUrl}/member/update/${memberId}`, value);
  }

  // updateMember(mem:MemberStatus):Observable<MemberStatus>{
  //   return this.http.put<MemberStatus>(`(${this.baseUrl}/member/delete/put)`,mem);
  // }




}
