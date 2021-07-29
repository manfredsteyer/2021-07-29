import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DetailsComponent
  ],
  exports: [
    DetailsComponent
  ]
})
export class UiModule {}
