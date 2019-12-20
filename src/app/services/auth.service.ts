import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: Observable<firebase.User>
  userId: string = ''

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.user  
   }

  signup(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email, password){
    //return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider)
    //return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider)
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.afAuth.auth.signOut()
  }
}
