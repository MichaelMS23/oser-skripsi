import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import axios from 'axios';

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

  async submitLogin() { 
    let response = await axios.create().request({
      method: 'post',
      url: 'http://3.208.28.174:3003/user/login',
      headers: {
          'Content-Type': 'application/json',
      },
      data: {   
        userid: this.username,
        password: this.password
      },
    });

    if(response.status!=200){
      this.username = ""
      this.password = ""
      return
    }
    
    let date = new Date()
    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000)
    let expires = `expires=${date.toUTCString()}`;

    document.cookie = `loginToken=${response.data.message[0].token}; ${expires}`
    window.location.href = "/"
  }

}
