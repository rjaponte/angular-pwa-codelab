import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageListComponent } from './messages/message-list/message-list.component';
import { SettingListComponent } from './settings/setting-list/setting-list.component';

const routes: Routes = [
  { path: '', component: MessageListComponent },
  { path: 'settings', component: SettingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
