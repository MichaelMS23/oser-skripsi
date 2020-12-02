import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  username: string;
  fullname: string;
  email: string;
  phonenumber: number;
  password: string;
  retypepassword: string;

  constructor() { }

  ngOnInit(): void {}

  submitRegister() {  }

}
