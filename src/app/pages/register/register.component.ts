import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  loading: boolean = false;
  
  signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar) 
    { 
      
    }
    
    ngOnInit(): void {
    }
    
    onSubmit(){
      if(this.signUpForm.value.email && this.signUpForm.value.password && this.signUpForm.value.username){
        if(this.signUpForm.value.password == this.signUpForm.value.confirmPassword){
          this.authService.signUp(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value,this.signUpForm.get('username')?.value).then((cred) => {
            this.loading = false;
            this.router.navigate(['/main'])
          }
          ).catch(() => {
            this.loading = false;
            this.wrongCredentialsSnackbar("Wrong email or password!");
          });
        }
        else{
          this.loading = false;
          this.wrongCredentialsSnackbar("Passwords don't match!");
        }
      }
      else{
        this.wrongCredentialsSnackbar("Please fill all the fields!");
      }
    }
    
    wrongCredentialsSnackbar(message: string) {
      this._snackBar.open(message, "Close", {
        duration: 20000,
        verticalPosition: 'top',
      });
    }
    
  }
  