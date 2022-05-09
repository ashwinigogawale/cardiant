import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GitfolderService {

  private baseURL = "http://localhost:3000/repos/ganeshris/Villa/git/trees/";

  constructor(private http:HttpClient,) { }
  getAll(id:string): Observable<any> {
    //Create Request URL params

    return this.http.get(this.baseURL+id);
  }
}
