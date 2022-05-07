import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email = new FormControl()
  password = new FormControl()
  
  constructor(private router: Router, private _snackBar: MatSnackBar, private authService: AuthService) { }
  
  loading: boolean = false;
  
  ngOnInit(): void {
  }
  
  login() {
    this.loading = true;
    
    if(this.email.value && this.password.value)
    this.authService.login(this.email.value, this.password.value).then((cred) => {
      this.router.navigate(['/main'])
      this.loading = false;
    }).catch(() => {
      this.wrongCredentialsSnackbar("Wrong credentials!");
      this.loading = false;
    });
    else
    this.loading = false;
    
    
  }
  
  wrongCredentialsSnackbar(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 20000,
      verticalPosition: 'top',
    });
  }
  
}
