import { Component } from '@angular/core';
import { add } from '@core/utils';
import { mul } from '@core/utils2';
// import { div } from '@core/utils3';

@Component({
  selector: 'core-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor() {
    const a = add(4, 9);
    const y = add(17, 222);

    console.log('b', a);
    console.log('y', y);

    // const d = div(10,3);
    const m = mul(7, 8);

    console.log('mul-div', m);

  }

}
