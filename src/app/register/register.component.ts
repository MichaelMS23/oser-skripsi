import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as $ from 'jquery';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
    fullname: string | undefined;
    email: string | undefined;
    phonenumber: number | undefined;
    password: string | undefined;
    retypepassword: string | undefined;
    code: string | undefined;
    validCode: string | undefined;

    constructor() {}

    ngOnInit(): void {}

    async submitRegister() {
        let response = await axios.create().request({
            method: 'post',
            url: 'http://3.208.28.174:3003/user/SendEmail',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { sendto: this.email },
        });
        
        if (response.status==200) {
            this.validCode = response.data.message
            $('.modal').addClass('is-active');
        }
    }

    async VerifyCode() {
        if (this.validCode != this.code) {
            this.code = ""
            return
        }
  
        await axios.create().request({
            method: 'post',
            url: 'http://3.208.28.174:3003/user/register',
            data: {
                userid:this.fullname,
                username:this.fullname,
                password:this.password,
                email:this.email,
                phone:this.password
            },
        });

        window.location.href = "/"
    }
}
