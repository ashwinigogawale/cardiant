import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuregitService {
  private baseURL="http://localhost:3000/repos/admin123/project/git/trees/618cea2f2022773c451ce4135698c62a2bdb3a70";
  private starurl="http://localhost:3000/repos/admin123/project";
private nameurl= "http://localhost:3000/repos/admin123/project/commits";
private folderURL= "http://localhost:3000/repos/admin123/project/git/trees/";
private fileURL = "http://localhost:3000/repos/admin123/project/git/blobs/";
  // private baseURL ="http://realits.ml:30167/api/v1/repos/admin123/project/git/trees/618cea2f2022773c451ce4135698c62a2bdb3a70";
  // private starurl ="http://realits.ml:30167/api/v1/repos/admin123/project";
  // private nameurl="http://realits.ml:30167/api/v1/repos/admin123/project/commits";
  // private folderURL= "http://realits.ml:30167/api/v1/repos/admin123/project/git/trees/";
  //private fileURL = "http://realits.ml:30167/api/v1/repos/admin123/projehttp://realits.ml:30167/api/v1ct/git/blobs/";
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

  getAllfolder(id:string): Observable<any> {
    //Create Request URL params

    return this.http.get(this.folderURL+id);
  }
  getAllfile(id:string): Observable<any> {
    //Create Request URL params

    return this.http.get(this.fileURL+id);
  }
}
