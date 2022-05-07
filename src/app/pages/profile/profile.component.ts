import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedIn:boolean=false;
  user?: firebase.default.User | null ;

  constructor(private authService:AuthService,private router: Router) {
    this.authService.getUser().subscribe(user => {
      if(!user)
      this.router.navigate(['/login']);
      else{
      this.loggedIn = true;
      this.user = user;
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
