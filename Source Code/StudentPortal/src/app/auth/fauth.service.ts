import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FauthService {
  private LoggedInStatus = false;
  public user$: Observable<firebase.User>;
  public AuthErrorMessage = null;
  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }
  private value: boolean;

  logout() {
    this.afAuth.auth.signOut()
      .then(_ => {
        this.LoggedIn(false);
        this.router.navigate(['/']);
      });
  }

  LoggedIn(value: boolean) {
    this.value = value;
    this.LoggedInStatus = this.value;
  }

  get isLoggedIn() {
    return this.LoggedInStatus;
  }
}
