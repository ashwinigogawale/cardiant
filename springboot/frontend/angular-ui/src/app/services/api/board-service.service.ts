import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from "rxjs";
import { ApiRequestService } from "./api-request.service";
@Injectable({
  providedIn: 'root'
})
export class BoardServiceService {

  constructor(private _http: HttpClient,
    private apiRequest: ApiRequestService,) { }
  // create board
  public createBoard(board: any){
    return this._http.post(`${baseUrl}/api/create`, board);
  }

  // update board
  public updateBoard(board: any){
    return this._http.put(`${baseUrl}/api/update`, board);
  }

  // get all boards
  public getAllBoards(){
    return this._http.get(`${baseUrl}/api/get-all`);
  }

  // get one board
  public getOneBoard(bId: any){
    return this._http.get(`${baseUrl}/api/get-one/${bId}`);
  }
  createurl='api/get-one'
  getById(id: number): Observable<any> {
    const _http = this.createurl + "/" + id;
    return this.apiRequest.get(_http);
  }
  // delete board
  public deleteBoard(bid: any){
    return this._http.delete(`${baseUrl}/api/delete-board/${bid}`);
  }
}
