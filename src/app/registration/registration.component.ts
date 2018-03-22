import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  genders = [
    {id: 0, value: 'select'},
    {id: 1, value: 'male'},
    {id: 2, value: 'female'}
  ];

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User('', '', this.genders[0].id, '', '');
  }

  onSubmit() {
    console.log(this.user);
    console.log(this.userService.saveUser(this.user));
  }
}
