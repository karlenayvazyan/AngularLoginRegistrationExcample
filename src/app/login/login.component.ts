import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string;

  userPassword: string;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userEmail = '';
    this.userPassword = '';
    console.log(this.route.snapshot.queryParams['returnUrl']);
  }

  login() {
    this.userService.getUserByEmailAndPassword(this.userEmail).subscribe(users => {
      const user = users[0];
      if (user.password === this.userPassword) {
        console.log(user);
        localStorage.setItem(environment.currentUser, JSON.stringify(user));
        this.router.navigate(['/home']);
      }
    });
  }
}
