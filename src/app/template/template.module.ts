import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { SwitchesComponent } from './pages/switches/switches.component';
import { MinDirective } from './directives/min.directive';



@NgModule({
  declarations: [
    DinamicosComponent,
    BasicosComponent,
    SwitchesComponent,
    MinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
