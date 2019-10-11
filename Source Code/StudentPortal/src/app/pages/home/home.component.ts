import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../auth/api.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FauthService} from '../../auth/fauth.service';
import {error} from 'util';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private FirebaseAuth: FauthService, private afAuth: AngularFireAuth,
              private FirebaseDB: AngularFireDatabase, private StudentRouter: Router) { }


  studentEmailPortalSystem = '';
  StudentPasswordPortalSystem = '';
  StudentFnamePortalSystem = '';
  StudentLnamePortalSystem = '';
  SecondEmailAddress = '';
  StudentAddressOne = '';
  StudentAddressTwo = '';
  StudentCity = '';
  StudentState = '';
  StudentZipCode = '';
  signInStudentP = '1';
  registerStudentP;
  ErrorMessageFirebase;

  ngOnInit() {
  }

  LogIn(e) {
    if (this.studentEmailPortalSystem !== '' && this.StudentPasswordPortalSystem !== '') {
      this.afAuth.auth.signInWithEmailAndPassword(this.studentEmailPortalSystem, this.StudentPasswordPortalSystem)
        .then(_ => {
          this.StudentRouter.navigate(['portal'])
          this.FirebaseAuth.LoggedIn(true);
        })
        // tslint:disable-next-line:no-shadowed-variable
        .catch(error => {
          this.ErrorMessageFirebase = error;
        });
      // this.FirebaseAuth.login(this.studentEmailPortalSystem, this.StudentPasswordPortalSystem);
      // // this.ErrorMessageFirebase = this.FirebaseAuth.AuthErrorMessage;
      // // console.log(this.FirebaseAuth.AuthErrorMessage);
      // this.FirebaseAuth.LoggedIn(true);
    } else {
      alert('Please Enter a valid account.');
    }
  }
// This function is for sign up a new student information
  SignUp(e) {
    // the if statement is for error handling
    if (this.StudentLnamePortalSystem !== '' && this.StudentFnamePortalSystem !== '' &&
      this.StudentPasswordPortalSystem !== '' && this.studentEmailPortalSystem !== '') {
      // The following code is to create a new username and password and store empty data for later use in a profile collection
      this.afAuth.auth.createUserWithEmailAndPassword(this.studentEmailPortalSystem, this.StudentPasswordPortalSystem)
        .then(_ => {
          this.afAuth.authState.subscribe(auth => {
            this.FirebaseDB.object(`Profile/${auth.uid}`).set({
              StudentFirstName: this.StudentFnamePortalSystem,
              StudentLastName: this.StudentLnamePortalSystem,
              SecondEmailAddress: this.SecondEmailAddress,
              StudentAddressOne: this.StudentAddressOne,
              StudentAddressTwo: this.StudentAddressTwo,
              StudentCity: this.StudentCity,
              StudentState: this.StudentState,
              StudentZipCode: this.StudentZipCode
            }).then();
          });
          alert('Registration Successful');
          // This is to navigaate to the portal and use guard for managing the pages
          this.StudentRouter.navigate(['portal'])
          this.FirebaseAuth.LoggedIn(true);
        })
        // tslint:disable-next-line:no-shadowed-variable
        .catch(error => {
          this.ErrorMessageFirebase = error;
        });
    } else {
             alert('Please Enter a valid information.');
    }
  }
  // This function is run once the user click the button cancel from registration
  // It is to show the login form and clear the error message
  Cancel() {
    this.ErrorMessageFirebase = '';
    this.signInStudentP = '1';
    this.registerStudentP = '';
  }
  // This function is run once the user click the button register
  // It is to show the registration form and clear the error message
  Register() {
    this.ErrorMessageFirebase = '';
    this.signInStudentP = '';
    this.registerStudentP = '1';
  }

  // This function is for resetting the password
  ResetPassword() {
    // the if statement below is for error handling
    if (!this.studentEmailPortalSystem) {
      alert('Please Enter a your Email');
    } else {
      // the line below is for resetting the password
      this.afAuth.auth.sendPasswordResetEmail(this.studentEmailPortalSystem)
    .then(() =>  alert('Please check your Email.'))
        .catch(error => {
          this.ErrorMessageFirebase = error;
        });
    }
  }
}
