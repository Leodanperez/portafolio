import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private api:string = Api.url;

  constructor( private http:HttpClient ) { }

  getData(){
    return this.http.get(`${this.api}work.json`);
  }
}
