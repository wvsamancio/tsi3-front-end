import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private signService: SignService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.signService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/hello-world']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}
