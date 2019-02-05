import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuzzyTimePipe } from './fuzzy-time.pipe';

@NgModule({
  declarations: [FuzzyTimePipe],
  exports: [FuzzyTimePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
