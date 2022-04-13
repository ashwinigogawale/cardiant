import { Injectable } from '@angular/core';
import { ApiRequestService } from "./api-request.service";
import baseUrl from './helper';
import { HttpClient, HttpParams,HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { demo } from '../../models/demo';
import { UserInfoService } from '../user-info.service';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private baseURL = "ncso1/test";// without paginatin used {all}
  private getidurl = "ncso1/find";
  private addurl = "ncso1/add";
  private updateurl = "ncso1/update";
  private deurl = "ncso1/delete";
  private allupdateurl = "ncso1/updateOneOrder";
  private allupdatenew ="ncso1/updateOneOrdernew";
 private alladdurl ="ncso1/addOneOrder";
  private getbilling = "ncso1/getAllBilling";
  private getdispute = "ncso1/getAllCreditNote";
   private getdisputeid = "ncso1/getOneOrder";
   private getnewdispute= "ncso1/newDispute";
   private getallcusturl = "ncso1/getAllCustomers1";
   private getallitemurl ="ncso1/getTarrifItemByItemCode";
   private getcustomerid ="ncso1/getCustomer";
   private getitemone = "ncso1/getTarrifItem";
   private getnavis = "ncso1/getAllNovis";
   private getonenavis = "ncso1/getOneNovis";
   private getpmod ="ncso1/getAllPmod";
   private getonepmod ="ncso1/getOnePmod";
   private prepurl= "ncso1/getPreparedBy";
   private getinvoicesub="ncso1/getAllEbsInvType";
   private readapprourl="ncso1/readyForApproval";

  constructor(
    private _http: HttpClient,
    private apiRequest: ApiRequestService,
    private userInfoService: UserInfoService
  ) { }

  getAll(page?: number, size?: number): Observable<any> {
    //Create Request URL params
    // let params: HttpParams = new HttpParams();
    // params = params.append("page", typeof page === "number" ? page.toString() : "0");
    // params = params.append("size", typeof size === "number" ? size.toString() : "40");
    //const _http = this.baseURL + '/all';
    //console.log(this.userInfoService.getUserInfo().userId);
    let id = this.userInfoService.getUserInfo().userId;
    const formData:FormData = new FormData();
    if (page!=null){formData.append("page",`${page}`)}

    return this.apiRequest.get(this.baseURL);
  }
  public getmaingrid() {
    return this._http.get(`${baseUrl}/ncso1/test2`);
  }
  public getdisputeall(){
    return this._http.get(`${baseUrl}/ncso1/getAllCreditNote`);
  }
  public getnavisall(){
    return this._http.get(`${baseUrl}/ncso1/getAllNovis`);
  }
  public getpmodall(){
    return this._http.get(`${baseUrl}/ncso1/getAllPmod`);
  }
getpage(page:any){

  if(page!=null){
    return this.apiRequest.get(`ncso1/test/${page}`);
  }else{
    return this.apiRequest.get(`ncso1/test/0`);
  }

}
getpage1(page:any){
  const params = new HttpParams()
  .set('state',page)
  console.log(page);
  if(page!=null){
    return this.apiRequest.get(`ncso1/test1`,params);
  }else{
    return this.apiRequest.get(`ncso1/test/0`);
  }

}
  update(id: number, demo: demo): Observable<any> {
    const _http = this.updateurl;
    return this.apiRequest.post(_http, demo);
  }
  updateall(id: number, demo: demo): Observable<any> {
    const _http = this.allupdateurl;
    return this.apiRequest.post(_http, demo);
  }
  getById(id: number): Observable<demo> {
    const _http = this.getidurl + "/" + id;
    return this.apiRequest.get(_http);
  }
  delete(id: number): Observable<any> {
    const _http = this.deurl + "/" + id;
    return this.apiRequest.delete(_http);
  }

  create(demo:demo): Observable<any> {
    return this.apiRequest.post(this.readapprourl, demo);
  }
  // createall(demo:demo,files:any): Observable<any> {
  //   const s = JSON.stringify(demo);
  //   console.log(s);
  //   const params = new HttpParams().set('o1',s);
  //   for(let i=0;i<files.length;i++){
  //     params.set(`file${i}`,files[i]);
  //   }
  //   let d = {"o1": s};
  //   const formDate = new FormData();
  //   formDate.append("o1",s);
  //   return this.apiRequest.post(this.alladdurl,{params:{'o1':s}});
  // }
  createall(demo:demo,files:any): Observable<any> {
    const s = JSON.stringify(demo);
    // console.log(s);
    //  this.params = new HttpParams().set('o1',s);
    // for(let i=0;i<files.length;i++){
    //  this.params.set(`file${i}`,files[i]);
    // }
    // let d = {"o1": s};
    const formData:FormData = new FormData();
    formData.append("o1",s);
    for(let i=0;i<files.length;i++){
      console.log("here");
      formData.append(files[i].name,files[i]);
    }
    //console.log(formData.get("attachmentFile0"))
    return this.apiRequest.postFormData(this.alladdurl,formData);
  }
  updatealln(id: number, demo: demo,files:any): Observable<any> {
    const s =JSON.stringify(demo);
    const formData:FormData=new FormData();
    formData.append("o1",s);
    for(let i=0;i<files.length;i++){
      console.log("here");
      formData.append(files[i].name,files[i]);
    }
    return this.apiRequest.postFormData(this.allupdatenew,formData);
  }
  getalldisputeid(){
    return this.apiRequest.get(this.getdispute);
  }
  // pagination creditnote
  getpagecredit(page:any){
    if(page!=null){
      return this.apiRequest.get(`ncso1/getAllCreditNote/${page}`);
    }else{
      return this.apiRequest.get(`ncso1/getAllCreditNote/0`);
    }

  }
  getbydisputeid(id:number){
    const _http = this.getdisputeid + "/" + id;
    return this.apiRequest.get(_http);
  }
  getnewdisput(id:number){
    const _http =this.getnewdispute +"/"+id;
    return this.apiRequest.get(_http);
  }
 getallcustomer(){
   return this.apiRequest.get(this.getallcusturl);
 }
 //pagination customer
 // pagination creditnote
 getallcustpage(page:any){
  if(page!=null){
    return this.apiRequest.get(`ncso1/getAllCustomers/${page}`);
  }else{
    return this.apiRequest.get(`ncso1/getAllCustomers/0`);
  }

}
 getbycustid(id:number){
  const _http = this.getcustomerid + "/" + id;
  return this.apiRequest.get(_http);
 }
 getallitem(value:string){
  return this.apiRequest.get(this.getallitemurl+`/${value}`);
 }
 getsearchnavisvalue(value:string){
  const params = new HttpParams()
  .set('search', value)
  return this.apiRequest.get(`ncso1/getAllNovis/${0}`,params);
 }
 getsearchpmodvalue(value:string){
  const params = new HttpParams()
  .set('search', value)
  return this.apiRequest.get(`ncso1/getAllPmod/${0}`,params);
 }
 getsearchcustvalue(value:string){
  const params = new HttpParams()
  .set('search', value)
  return this.apiRequest.get(`ncso1/getAllCustomers/${0}`,params);
 }
 getsearchdisputevalue(value:string){
  const params = new HttpParams()
  .set('search', value)
  //.set('sort', SortOn);
   console.log('in service =', value);
  return this.apiRequest.get(`ncso1/getAllCreditNote/${0}`,params);
 }
 getallinvoicetype(){
  return this.apiRequest.get(this.getinvoicesub);
 }
 getbyitemcode(id:number){
  const _http = this.getitemone + "/" + id;
  return this.apiRequest.get(_http);
 }
// without pagination
 getallnavis(){
   return this.apiRequest.get(this.getnavis);
 }
 //navis pagiantion
 getnavispage(page:any){
  if(page!=null){
    return this.apiRequest.get(`ncso1/getAllNovis/${page}`);
  }else{
    return this.apiRequest.get(`ncso1/getAllNovis/0`);
  }

}
 getbynavisid(name :any ,id:any){
   const _http = this.getonenavis + "/" +name +"/" + id;
   return this.apiRequest.get(_http);
 }
 getallpmod(){
   return this.apiRequest.get(this.getpmod);
 }
 //pagination pmod
 getpmodpage(page:any){
  if(page!=null){
    return this.apiRequest.get(`ncso1/getAllPmod/${page}`);
  }else{
    return this.apiRequest.get(`ncso1/getAllPmod/0`);
  }

}
 getbypmodid(id:any){
   const _http =this.getonepmod + "/" + id;
   return this.apiRequest.get(_http);
 }
    getbillingdata(): Observable<demo> {
    const _http = this.getbilling;
    return this.apiRequest.get(_http);
  }

  addOneFile(data:any,orderId:any){
    const h= `http://localhost:9191/ncso1/addOneAttachment?=${orderId}`;
    return this.apiRequest.post(h,{HttpParams:data});
  }
getprepared(){
  return this.apiRequest.get(this.prepurl);
}

//   public getAll() {
//     return this._http.get(`${baseUrl}/ncso1/all`);
//   }
//   public getbyid(Id: any){
//     return this._http.get(`${baseUrl}/ncso1/find/${Id}`);
//   }
//   public create(data: any){
//     return this._http.post(`${baseUrl}/ncso1/add`, data);
//   }
// // update
// public update(data: any){
//   return this._http.put(`${baseUrl}/ncso1/update`, data);
// }
// public delete(data: any){
//   return this._http.put(`${baseUrl}/ncso1/delete`, data);
// }
}
