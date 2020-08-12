import { Component, OnInit } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';
//import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  cargando:boolean = true;
  works:any[] = [];

  constructor( /*private workService:WorkService*/ public infoService:InformacionService ) { }

  ngOnInit(): void {

    //this.cargando = false;

    /*this.workService.getData()
    .subscribe(resp => {

      let i;

      for(i in resp){

        this.works.push(resp[i]);

      }

    })*/

    /*<div 
      *ngFor="let work of works"
      class="col-lg-4 webdesign">
        <div class="work_img_box rounded">
          <a class="img-zoom" href="{{ work.url }}"></a>
          <div class="work_images">
            <img src="{{ work.url }}" alt="image" class="img-fluid mx-auto d-block">
            <div class="work_overlay">
              <h4 class="mb-0">{{ work.texto }}</h4>
              <h6 class="mb-0">{{ work.descripcion }}</h6>
            </div>
          </div>
        </div>
      </div> */
  }

}
