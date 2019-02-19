import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LastMessage, MESSAGES } from '../../last-message';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  providers: [MessageService]
})
export class MessageListComponent implements OnInit {
  messages: Observable<LastMessage[]>;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService
      .getMessages();
  }

}
