import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  submitLogin() {  }

}
