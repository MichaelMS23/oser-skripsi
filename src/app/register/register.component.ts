import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import axios from 'axios';
import * as $ from 'jquery';
=======
import axios from "axios";
>>>>>>> 3f145669748bf4b010b796dbaddb8de1a5d10f39

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
            data: JSON.stringify({ sendTo: 'farak82632@hebgsw.com' }),
        });

        console.log(response);

        // //set responsenya ke messagenya
        // this.validCode = response.message

        //kalo responsenya error gak tampilin modalnya
        if (false) {
            $('.modal').addClass('is-active');
        }
    }

    async VerifyCode() {
        //cek kode input sama kode dari email
        //kalo sama login dan redirect
        if (this.validCode == this.code) {
            //login
            let response = await axios.create().request({
                method: 'post',
                url: 'http://3.208.28.174:3003/user/login',
                data: {
                    userid: 'evi',
                    password: 'evi',
                },
            });

            console.log(this.code);

            //redirect home ? sepertinya gak butuh close modalnya lagi
            $('.modal').removeClass('is-active');
        }
    }
}
