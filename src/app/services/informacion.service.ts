import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  works:any = [];

  constructor( public http:HttpClient ) { 

    this.cargarInfo();
    this.cargarWork();
  }

  private cargarInfo(){
    this.http.get("assets/data/info.data.json")
    .subscribe( resp => {
      this.cargada = true;
      this.info = resp;
    })
  }

  private cargarWork(){
    this.http.get("https://portafolio-bf78d.firebaseio.com/work.json")
    .subscribe( resp => {
      
      this.works = resp;
      this.cargada = true;
      
    });
  }
}
