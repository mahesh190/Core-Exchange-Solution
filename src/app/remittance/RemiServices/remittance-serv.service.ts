import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemittanceServService {
  constructor(private _http: HttpClient) {}

  addRemittanceInitiationData(data: any): Observable<any> {
    debugger;
    return this._http.post('http://localhost:3000/RemittanceInitiation', data);
  }

  // return this._http.post('http://localhost:3000/RemittanceInitiation', data,{
  //   file_name:fileName,
  //   file_size:fileSize,
  //   file_type:fileType
  // }




  updateRemittanceInitiationData(id: number, data: any): Observable<any> {
    debugger;

    return this._http.put(`http://localhost:3000/RemittanceInitiation/${id}`, data);
  }

  getRemittanceInitiation(): Observable<any> {
    return this._http.get('http://localhost:3000/RemittanceInitiation');
  }

  deleteRemittanceInitiation(id: number): Observable<any> {
    debugger;
    return this._http.delete(`http://localhost:3000/RemittanceInitiation/${id}`);
  }
}
