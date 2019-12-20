import { UserService } from './../../services/user.service';
import { User } from './../models/user.interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string = ''

  constructor(private as: AuthService, private us: UserService, private router: Router) { }

  ngOnInit() {
  }

  signup(form){
    //console.log(form)
    let data: User = form.value  //form.value عبارة عن أوبجيكت فيه القيم المدخلة لجميع العناصر
    console.log(data);
    this.as.signup(data.email, data.password)
           //.then(data => console.log(data))
           //.catch(err => console.log("error",err))
           .then(result => {
           this.errorMessage = ''
           this.us.addNewUser(result.user.uid, data.name, data.address).then(() => {
            this.router.navigate(['/'])
             })
           })
           .catch(err => {
             this.errorMessage = err.message
           })
  }

}
