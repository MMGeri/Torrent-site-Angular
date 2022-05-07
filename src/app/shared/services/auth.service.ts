import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private auth: AngularFireAuth) {
    
  }
  
  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }
  
  signUp(email: string, password: string, username: string){
    //TODO: save username to database
    
      let promise = this.auth.createUserWithEmailAndPassword(email,password)
      promise.then(() => {
        this.auth.currentUser.then(user => {
          user?.updateProfile({
            displayName: username
          })})});
      return promise;
    }
      
    logout(){
      return this.auth.signOut();
    }
    
    getUser(){
      return this.auth.user;
    }
      
    }
    