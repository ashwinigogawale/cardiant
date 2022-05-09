import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuregitService {
  private baseURL ="http://realits.ml:30167/api/v1/repos/admin123/project/git/trees/618cea2f2022773c451ce4135698c62a2bdb3a70"; //"http://localhost:3000/repos/admin123/project/git/trees/618cea2f2022773c451ce4135698c62a2bdb3a70";
  private starurl ="http://realits.ml:30167/api/v1/repos/admin123/project";//"http://localhost:3000/repos/admin123/project";
  private nameurl="http://realits.ml:30167/api/v1/repos/admin123/project/commits";//"http://localhost:3000/repos/admin123/project/commits"
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
