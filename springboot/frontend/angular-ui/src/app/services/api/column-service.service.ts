import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ColumnServiceService {

  constructor(private _http: HttpClient) { }
  // create column
  public createcolumn(column: any){
    return this._http.post(`${baseUrl}/cols/create`, column);
  }

  // update column
  public updatecolumn(column: any){
    return this._http.put(`${baseUrl}/cols/update`, column);
  }

  // get all columns
  public getAllColumns(){
    return this._http.get(`${baseUrl}/cols/get-all`);
  }

  // get one column
  public getOneColumn(cid: any){
    return this._http.get(`${baseUrl}/cols/get-one/${cid}`);
  }

  // delete column
  public deleteColumn(cid: any){
    return this._http.delete(`${baseUrl}/cols/delete/${cid}`);
  }

  // get columns of perticular board
  public getColumnsOfBoard(bid: any){
    return this._http.get(`${baseUrl}/cols/board/${bid}`);
  }
}
