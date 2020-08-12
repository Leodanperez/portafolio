import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html'
})
export class SlideComponent {

  constructor( public _is:InformacionService ) {

  }

}
