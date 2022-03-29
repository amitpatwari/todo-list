import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitPage() {
    if (this.email == "Admin" && this.password == "test") {
      this.router.navigate(['/', 'home']);
    }
    else {
      alert("Wrong id or password");
    }
  }
}
