import { Component, OnInit, Input } from '@angular/core';
import { LastMessage } from '../../last-message';

@Component({
  selector: 'app-last-message',
  templateUrl: './last-message.component.html',
  styleUrls: ['./last-message.component.scss']
})
export class LastMessageComponent implements OnInit {
  @Input() lastMessage: LastMessage;

  constructor() { }

  ngOnInit() {
  }

}
