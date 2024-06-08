import { NgModule } from '@angular/core';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { TextConverterPageComponent } from './pages/text-converter-page/text-converter-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SystemComponent, TextConverterPageComponent],
  imports: [SystemRoutingModule, SharedModule],
})
export class SystemModule {}
