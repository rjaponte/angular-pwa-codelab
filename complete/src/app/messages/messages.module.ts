import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';

import { PipesModule } from '../pipes/pipes.module';
import { ServicesModule } from '../services/services.module';

import { MessagesRoutingModule } from './messages-routing.module';
import { LastMessageComponent } from './last-message/last-message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { UserIconsComponent } from './user-icons/user-icons.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [LastMessageComponent, MessageListComponent, UserIconsComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    PipesModule,
    MessagesRoutingModule,
    ServicesModule,
  ]
})
export class MessagesModule { }
