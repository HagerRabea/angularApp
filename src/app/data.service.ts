import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//httpClient
  constructor(private _HttpClient:HttpClient) { 
  }
  
  getAllCatergory():Observable<any>{
    let res=this._HttpClient.get('https://dummyjson.com/products/category-list');
    return res;
  }
}
