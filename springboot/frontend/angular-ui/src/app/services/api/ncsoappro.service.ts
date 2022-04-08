import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';
@Injectable({
  providedIn: 'root'
})
export class NcsoapproService {

  constructor(private _http: HttpClient,
    private apiRequest: ApiRequestService,) { }
    // public getAll() {
    //   return this._http.get(`${baseUrl}/ncso1/getallApprovalPending`);
    // }
    public getAll1(){
      return this._http.get(`${baseUrl}/ncso1/getAllByDeptByGrpLevel`);
    }
    public getbyid(Id: any){
      return this._http.get(`${baseUrl}/api/getOneAppUser/${Id}`);
    }
    public create(data: any){
      return this._http.post(`${baseUrl}/api/addOneUsrGrp`, data);
    }
  // update
  public update(data: any){
    return this._http.post(`${baseUrl}/api/updateOneUsrGrp`, data);
  }
}
