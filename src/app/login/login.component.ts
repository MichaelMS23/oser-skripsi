import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitLogin() {  }

}
