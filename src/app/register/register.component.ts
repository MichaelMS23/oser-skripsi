import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  username: string | undefined;
  fullname: string | undefined;
  email: string | undefined;
  phonenumber: number | undefined;
  password: string | undefined;
  retypepassword: string | undefined;

  constructor() { }

  ngOnInit(): void {}

  submitRegister() {  }

}
