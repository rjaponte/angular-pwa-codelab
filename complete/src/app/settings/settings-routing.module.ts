import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingListComponent } from './setting-list/setting-list.component';


const routes: Routes = [
  { path: '', component: SettingListComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
