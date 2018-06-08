import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
})
export class DetallesComponent {
  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id']);
  }

}



