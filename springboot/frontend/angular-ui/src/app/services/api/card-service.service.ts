import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private _http: HttpClient) { }
  // create card
  public createCard(card: any){
    return this._http.post(`${baseUrl}/cards/create`, card);
  }

  // create card
  public updateCard(card: any){
    return this._http.put(`${baseUrl}/cards/update`, card);
  }

  // get all cards
  public getAllCards(){
    return this._http.get(`${baseUrl}/cards/get-all`);
  }

  // get one card
  public getOneCard(cid: any){
    return this._http.get(`${baseUrl}/cards/get-one/${cid}`);
  }

  // delete card
  public deleteCard(cid: any){
    return this._http.delete(`${baseUrl}/cards/delete/${cid}`);
  }

  // get cards of perticular column
  public getCardsOfColumn(colunmId: any){
    return this._http.get(`${baseUrl}/cards/column/${colunmId}`);
  }
}
