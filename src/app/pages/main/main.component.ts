import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loggedIn:boolean=false;
  query: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    ) 
    { 
    this.authService.getUser().subscribe(user => {
      if(!user)
      this.router.navigate(['/login']);
      else
      this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

  loadQuery(query: string) {
    this.query = query;
  }

}
