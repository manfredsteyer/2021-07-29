import { Component } from '@angular/core';
import { add } from '@core/utils';

@Component({
  selector: 'core-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor() {
    const a = add(4, 9);
    console.log('a', a);
  }

}