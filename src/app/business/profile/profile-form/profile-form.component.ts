import { Component, Input, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input() userInfo?: firebase.UserInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
