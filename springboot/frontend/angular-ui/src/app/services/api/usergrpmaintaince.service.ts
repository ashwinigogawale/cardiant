import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { Usergrpmain } from '../../models/usergrpma';
@Injectable({
  providedIn: 'root'
})
export class UsergrpmaintainceService {
  private baseURL = "api/updateOneUsrGrp";
  constructor(private _http: HttpClient,
    private apiRequest: ApiRequestService,) { }
  public getAll() {
    return this._http.get(`${baseUrl}/api/getAllUsrGrp`);
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
updatei(id: number, projectSetup: Usergrpmain): Observable<any> {
  const _http = this.baseURL + "/" + id;
  return this.apiRequest.put(_http, projectSetup);
}
}
