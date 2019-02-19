import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingListComponent } from './setting-list/setting-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [SettingListComponent, ToolbarComponent],
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSlideToggleModule,
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
