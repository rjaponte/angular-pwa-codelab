import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user-icons',
  templateUrl: './user-icons.component.html',
  styleUrls: ['./user-icons.component.scss']
})
export class UserIconsComponent implements OnInit {
  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}
