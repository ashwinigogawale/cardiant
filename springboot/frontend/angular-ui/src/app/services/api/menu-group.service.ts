import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../../services/api/helper';
import { ApiRequestService } from './api-request.service';
import { Rn_Main_Menu } from '../../models/Rn_Main_Menu';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuGroupService {

  constructor(
    private _http: HttpClient,
    private apiRequest: ApiRequestService,
  ) { }

  public getAll(){
    return this._http.get(`${baseUrl}/api/menu-group`);
  }

  public addToDb(header: any){
    return this._http.post(`${baseUrl}/api/menu-group`, header);
  }

  public addLineToDb(line: any){
    return this._http.post(`${baseUrl}/lines_m/create`, line);
  }

  public getOneById(id: any){
    return this._http.get(`${baseUrl}/api/menu-group/${id}`);
  }

  public updateGroupHeader(id: any, data: any){
    return this._http.put(`${baseUrl}/api/menu-group/${id}`, data);
  }

  public updateLineById(id: any){
    return this._http.put(`${baseUrl}/lines_m/update`, id);
  }

  public deleteById(id: any){
    return this._http.delete(`${baseUrl}/api/menu-group/${id}`);
  }
  getByCurrentUserMenuGroupId(): Observable<Rn_Main_Menu[]> {
    const _http1 = "api1/getByUserId"
    return this.apiRequest.get(_http1);
}

}
