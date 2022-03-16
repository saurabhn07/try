import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationStatus } from '../models/AuthenticationStatus.model';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientloginService {
  message:string;
  constructor(private httpClient: HttpClient) {}

  setMessage(data:string){this.message=data}

  getMessage(){return this.message}

  authenticated(patient:Patient){
    return this.httpClient.post<AuthenticationStatus>(
        'http://localhost:8081/api/v1/patientlogin',patient
    );

    }
}