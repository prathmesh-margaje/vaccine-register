import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseUrl ='http://localhost:8080/api';

  constructor(private http:HttpClient) { }
  addMember(member : object) : Observable<object> {
    return this.http.post(`${this.baseUrl}/idcard/new`, member);
  }
  
  getMemberList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/idcard/list`);
  }
  
  getMemberById(idCard : number) : Observable <any> {
    return this.http.get(`${this.baseUrl}/idcard/id/${idCard}`);
  }

  updateMember (idCard : number, value : any ) : Observable<object> {
    return this.http.put(`${this.baseUrl}/idcard/update/${idCard}`, value);
  }
  
  deleteMember(idCard : number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/idcard/delete/${idCard}`);
  }


}

// baseUrl ='http://localhost:8080/api/user';