import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable,  throwError } from 'rxjs';
import { Inv } from '../models/invmodel';

@Injectable({
  providedIn: 'root'
})
export class InvService {
  
  private url: string = 'http://localhost:8081/api/v1';

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  constructor(private _http:HttpClient) { }
  public addInvFromRemote(invoice:Inv):Observable<any> {
    return this._http.post<any>("http://localhost:8081/api/v1/inv", invoice)
  }
  getInv(p_id: any): Observable<Inv> {
    return this._http
   .get<Inv>(this.url + '/inv/' + p_id, this.httpOptions)
   //.pipe(retry(1), catchError(this.handleError));
}

handleError(error: any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
  }

  window.alert(errorMessage);
  return throwError(errorMessage);
}

}
