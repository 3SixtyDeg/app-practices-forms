import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { SwitchesComponent } from './pages/switches/switches.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dinamicos',
        component: DinamicosComponent
      },
      {
        path: 'basicos',
        component: BasicosComponent
      },
      {
        path: 'switches',
        component: SwitchesComponent
      },
      {
        path: '**',
        redirectTo: '/page-not-found'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TemplateRoutingModule { }
