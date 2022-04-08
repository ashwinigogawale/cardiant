import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestService } from "./api-request.service";
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class UsermaintanceService {

  constructor(private _http: HttpClient,) { }
  public getAll() {
        return this._http.get(`${baseUrl}/api/getAllAppUser`);
      }
      public getbyid(Id: any){
        return this._http.get(`${baseUrl}/api/getOneAppUser/${Id}`);
      }
      public create(data: any){
        return this._http.post(`${baseUrl}/api/addOneAppUser`, data);
      }
    // update
    public update(data: any){
      return this._http.post(`${baseUrl}/api/updateAppUser`, data);
    }
    public getallposition(){
      return this._http.get(`${baseUrl}/api/getAllPositions`);
    }
    public getbypositionid(Id:any){
      return this._http.get(`${baseUrl}/api/getPosition/${Id}`);
    }
    public getalldepartment(){
      return this._http.get(`${baseUrl}/api/getAllDepartments`);
    }
    public getbydepartmentid(Id:any){
      return this._http.get(`${baseUrl}/api/getDepartment/${Id}`);
    }
}
