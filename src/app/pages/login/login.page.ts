import { Component, OnInit } from '@angular/core';
import { AppChatService } from '../../services/app-chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user={username:null,password:null};
  constructor(private appChatService:AppChatService) { }

  ngOnInit() {
  }

  validar() {
    if (this.user.username && this.user.password) {
      console.log(this.user);
      this.appChatService.login(this.user.username, this.user.password).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error('ERROR EN EL LOGIN', error);
        }
      );
    } else {
      console.warn('EL USERNAME NO PUEDE SER NULL');
    }
  }
}

