import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GitfileService {
  private baseURL = "http://localhost:3000/repos/admin123/project/git/blobs/";
  constructor(private http:HttpClient) { }

  getAll(id:string): Observable<any> {
    //Create Request URL params

    return this.http.get(this.baseURL+id);
  }
}
