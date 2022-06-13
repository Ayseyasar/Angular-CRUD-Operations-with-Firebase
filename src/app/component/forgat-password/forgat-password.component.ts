import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgat-password',
  templateUrl: './forgat-password.component.html',
  styleUrls: ['./forgat-password.component.css']
})
export class ForgatPasswordComponent implements OnInit {

  email: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }

}
