import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import axios from "axios";

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

  async submitRegister() { 
    let a = await axios.create().request({
      method: "post",
      url: "http://3.208.28.174:3003/user/login",
      data:{
        userid:"evi",
        password:"evi"
      }
    });
    console.log(a);
   }

}
