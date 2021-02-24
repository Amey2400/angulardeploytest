import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  sendData(data1: string) : Observable<any>{
    const body = JSON.stringify({id: 1, x: data1});
    console.log(data1);
    return this.http.post(this.baseurl + '/outputplot/' , body,
    {headers: this.httpHeaders});
  }
  senddata_topython(){
    return this.http.get(this.baseurl+'/senddata_topython/',{headers:this.httpHeaders});
  }
}
