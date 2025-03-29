import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasAnyRessourcesDirective } from '../../providers/ressources.directives copy';
import { HasAnyauthority } from 'src/app/providers/ressources.directives';

@NgModule({
  declarations: [HasAnyRessourcesDirective, HasAnyauthority],
  imports: [ CommonModule ],
  exports: [HasAnyRessourcesDirective, HasAnyauthority],
  providers: [],
})
export class SharedModule {}
