import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Admin } from "../models/adminlogin.model";
import { AuthenticationStatus } from "../models/AuthenticationStatus.model";


@Injectable({
    providedIn: 'root',
})

export class AdminService {
    constructor(private _http :HttpClient) { }
  
  
  
    public loginAdminFromRemote(admin :Admin):Observable<any>{
       return this._http.post<any>("http://localhost:8081/api/v1/adminlogin",admin)
      
    }
  
    public registerAdminFromRemote(admin :Admin):Observable<any>{
      return this._http.post<any>("http://localhost:8081/api/v1/registerAdmin",admin)
    }
}
