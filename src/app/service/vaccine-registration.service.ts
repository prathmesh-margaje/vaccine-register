import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VaccineRegistration } from '../class/vaccine-registration';

@Injectable({
  providedIn: 'root'
})
export class VaccineRegistrationService {

  baseUrl ='http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  addVaccineRegistration(vaccineRegistration : Object) : Observable<object> {
    return this.http.post(`${this.baseUrl}/registration/new`, vaccineRegistration);
  }

}

