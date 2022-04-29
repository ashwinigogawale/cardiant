import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import{environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  baseurl='http://localhost:8085';
  //baseurl = environment.jobUrl;
  constructor(private _http: HttpClient,) { }
  public getAllinfo() {
    return this._http.get(`${this.baseurl}/schedule`);
  }
  public getAll() {
    return this._http.get(`${this.baseurl}/pipiline-completed`);
  }
  public getAllpipe() {
    return this._http.get(`${this.baseurl}/getAllPipeline`);
  }

  public createpipe(data: any){
    return this._http.post(`${this.baseurl}/addPipeline`, data);
  }
  public create(data: any){
    return this._http.post(`${this.baseurl}/schedule`,data);
  }
}
