import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private basePath = '/users';

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  public saveUser(user: User): void {
    this.angularFireDatabase
      .list(`${this.basePath}/${user.email}`)
      .push(user);
  }

  public getUsers(): Observable<any[]> {
    return this.angularFireDatabase
      .list(this.basePath)
      .valueChanges();
  }

  public getUserByEmailAndPassword(email: string): Observable<any> {
    return this.angularFireDatabase
      .list(`${this.basePath}/${email}`).valueChanges();
  }
}
