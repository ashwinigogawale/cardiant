import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../api/helper'
@Injectable({
  providedIn: 'root'
})
export class WireframeLineService {

  constructor(private _http: HttpClient) { }
  public addToDB(line: any){
    return this._http.post(`${baseUrl}/r/create`, line);
  }

  public getOneFromDBById(id: any){
    return this._http.get(`${baseUrl}/r/get-one/${id}`);
  }

  public getAllLines(){
    return this._http.get(`${baseUrl}/r/get-all`);
  }

  public updateOneLine(line: any){
    return this._http.put(`${baseUrl}/r/update`, line);
  }
}
