import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuregitService {
  private baseURL = "http://localhost:3000/repos/ganeshris/Villa/git/trees/4ef7734406";
  private starurl ="http://localhost:3000/repos/ganeshris/Villa";
  private nameurl="http://localhost:3000/repos/ganeshris/Villa/commits"
  constructor(private http:HttpClient,) { }
  getAll(): Observable<any> {
    //Create Request URL params

    return this.http.get(this.baseURL);
  }
  getstar():Observable<any>{
    return this.http.get(this.starurl);
  }
  getname():Observable<any>{
    return this.http.get(this.nameurl);
  }
  getById(id: number): Observable<any> {
    const _http = this.baseURL + "/" + id;
    return this.http.get(_http);
  }
}
