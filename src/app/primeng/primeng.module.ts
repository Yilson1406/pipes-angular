import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {ToggleButtonModule} from 'primeng/togglebutton';




@NgModule({
  declarations: [],
exports:[
  ButtonModule,
  CardModule,
  SidebarModule,
  ToggleButtonModule
]
})
export class PrimengModule { }
