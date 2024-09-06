import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetailCustomerService {
  constructor(private _http: HttpClient) {}

  allPassedData: any;

  addRetailCustomerData(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/retailCustomer', data);
  }

  addCorpCustomerData(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/corporateCustomer', data);
  }

  storePassedObject(passedData) {
    this.allPassedData = passedData;
  }

  retrievePassedObject() {
    return this.allPassedData;
  }

  getRetailCustomerData(): Observable<any[]> {
    return this._http.get<any[]>('http://localhost:3000/retailCustomer');
  }

  getCorpCustomerData(): Observable<any[]> {
    return this._http.get<any[]>('http://localhost:3000/corporateCustomer');
  }

  getLastItem(): Observable<any> {
    return this.getRetailCustomerData().pipe(
      map((items) => items[items.length - 1]) // Get the last item from the array
    );
  }

  getLastItemOfCorporateCustomers(): Observable<any> {
    return this.getCorpCustomerData().pipe(
      map((items) => items[items.length - 1]) // Get the last item from the array
    );
  }

  // getRetailCustomerData(): Observable<any> {
  //   return this._http.get("http://localhost:3000/retailCustomer");
  // }

  // get unique Branch id
  generateUniqueRetailCustomerId(): number {
    return Math.floor(Math.random() * 1000);
  }

  updaterBranchData(id: number, branchId: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/formData/${id}`, {
      data,
      BranchID: branchId
    });
  }

  deleteBranchData(id: number): Observable<any> {
    return this._http.delete(`http://localhost:4200/branchdetails/${id}`);
  }
}
